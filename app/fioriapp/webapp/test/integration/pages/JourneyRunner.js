sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/subbu/fioriapp/test/integration/pages/HelloList",
	"com/subbu/fioriapp/test/integration/pages/HelloObjectPage"
], function (JourneyRunner, HelloList, HelloObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/subbu/fioriapp') + '/test/flp.html#app-preview',
        pages: {
			onTheHelloList: HelloList,
			onTheHelloObjectPage: HelloObjectPage
        },
        async: true
    });

    return runner;
});

