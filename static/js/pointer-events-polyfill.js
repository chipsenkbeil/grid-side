(function() {
    /* From http://stackoverflow.com/a/2401861/3164172 , modified by me */
    navigator.browserInfo = (function() {
        var newResult = function(name, version, full) {
            var result = { name: "", version: "", full: "" };
            result.name = (name || "").toLowerCase();
            result.version = (version || "").toLowerCase();
            result.full = (
                full || (result.name + " " + result.version).trim()
            ).toLowerCase();
            return result;
        };

        var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return newResult("IE", tem[1]);
        }
        if (M[1] === "Chrome") {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) return newResult(
                tem[1].replace("OPR", "Opera"),
                tem[2],
                tem.slice(1).join(" ").replace("OPR", "Opera")
            );
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
        if ((tem = ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return newResult(M[0], M[1], M.join(" ").trim());
    })();

    /* If browser and version is okay, don't apply polyfill */
    /* TODO: Provide better way to check for CSS4 pointer-events support */
    if (navigator.browserInfo.name === "firefox" &&
        parseFloat(navigator.browserInfo.version) >= 38) {
        console.log("Ignoring pointer events polyfill, browser is okay!");
        return;
    }

    // Returns the pointer events for the specified element
    var getPointerEventsStyle = function(element) {
        var view, computedStyle, pointerEvents;
        if (element && element.nodeType === Element.ELEMENT_NODE) {
            view = document.defaultView || window;
            if (view) {
                computedStyle = view.getComputedStyle(element);
                if (computedStyle &&
                    typeof computedStyle.getPropertyValue === "function")
                {
                    pointerEvents =
                        computedStyle.getPropertyValue("pointer-events");
                }
            }
        }

        return pointerEvents || undefined;
    };

    /* Adds listeners to follow the pointer-events css */
    var attachPointerEventsPolyfill = function(node) {
        var initialPointerEvents = getPointerEventsStyle(node);

        // If no pointer events specified, do not attach listeners
        if (!node || !initialPointerEvents) {
            return;
        } else {
            console.log("Attaching pointer events to", node.nodeName);
        };

        var events = [
            "click", "dblclick", "mousedown", "mouseup", "mouseover",
            "mouseout", "mousemove", "drag", "dragstart", "dragend",
            "dragleave", "dragover", "drop", "mousewheel", "scroll",
            "contextmenu"
        ];

        var eventFunction = function(e) {
            var pointerEvents = getPointerEventsStyle(node) || "auto";

            // If no pointer events, cancel this mouse event
            if (pointerEvents === "none") {
                console.log("Cancelling event!");
                e.preventDefault();
            } else {
                console.log("Not cancelling event!");
            }
        };

        events.forEach(function(eventName) {
            node.addEventListener(eventName, eventFunction, false);
        });
    };

    var target = document.querySelector("body");

    // Recursively attach handlers to nodes
    function runPolyfill(node) {
        if (!node) return;

        var name = node.nodeName;

        // Add pointer events to this node
        try {
            attachPointerEventsPolyfill(node);
        } catch (ex) {
            console.error("Failed to add pointer events to", name, ":", ex);
        }

        // Add pointer events to all child nodes
        var childNodes = node.childNodes;
        for (var i = 0; i < childNodes.length; ++i) {
            runPolyfill(childNodes[i]);
        }
    }
    runPolyfill(target);

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var addedNodes = mutations.addedNodes;
            if (addedNodes) {
                for (var i = 0; i < addedNodes.length; ++i) {
                    runPolyfill(addedNodes[i]);
                }
            }

            var removedNodes = mutations.removedNodes;
            if (removedNodes) {
                for (var i = 0; i < removedNodes.length; ++i) {
                    /* TODO: Remove listeners? */
                }
            }

            // TODO: Handle addition/removal of pointer-events styling
        });
    });

    var config = {
        childList: true,
        subtree: true
    };

    //observer.observe(target, config);
    observer.observe(target, config);
})();

