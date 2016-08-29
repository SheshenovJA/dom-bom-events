//
(function (window) {
    {
        var unknown = 'no information';//for future

        var getUserAgent = navigator.userAgent;

        // system
        var os = unknown;
        var clientOs = [
            {s:'windows ', r:/Windows /},
            {s:'android', r:/Android /},
            {s:'linux', r:/(Linux|X11) /},
            {s:'ios', r:/(iPhone|iPad|iPod)/},
            {s:'mac os', r:/Mac OS X/},
            {s:'unix', r:/UNIX/}

        ];
        for (var id in clientOs) {
            var cs = clientOs[id];
            if (cs.r.test(getUserAgent)) {
                os = cs.s;
                break;
            }
        }
    }

        window = {
        os: os
    };
          //  console.log(id);

          console.log(window.os);
          document.querySelector('div.download-message[data-version='+window.os+']').style.display = "block";

}(this));
