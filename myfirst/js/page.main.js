requirejs.config({
    paths: {
    	jquery:'./jquery-1.7.1',
       'czw.tool' : 'tool/czw.tool'
    },
    "shim": {
        "jquery.dataTable": ["jquery"]
    }
});
 
define(['jquery','czw.tool'], function($, t) {
    t.findPreNext();
});
