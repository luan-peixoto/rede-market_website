
function show_todos() {
    $(".todos.fade-in").removeClass("fade-in")

    $(".todos").addClass("fade-out").one('animationend webkitAnimationEnd', function() { 
        $(".todos").addClass("hide").removeClass("fade-out")
        $(".todos.hide").removeClass("hide").addClass("fade-in")
    });

    
}

function show_familia() {
    $(".todos.fade-in").removeClass("fade-in")

    $(".todos").addClass("fade-out").one('animationend webkitAnimationEnd', function() { 
        $(".todos").addClass("hide").removeClass("fade-out")
        $(".todos.familia.hide").removeClass("hide").addClass("fade-in")
    });
}

function show_gourmet() {
    $(".todos.fade-in").removeClass("fade-in")

    $(".todos").addClass("fade-out").one('animationend webkitAnimationEnd', function() { 
        $(".todos").addClass("hide").removeClass("fade-out")
        $(".todos.gourmet.hide").removeClass("hide").addClass("fade-in")
    });
}

function show_pratico() {
    $(".todos.fade-in").removeClass("fade-in")

    $(".todos").addClass("fade-out").one('animationend webkitAnimationEnd', function() { 
        $(".todos").addClass("hide").removeClass("fade-out")
        $(".todos.pratico.hide").removeClass("hide").addClass("fade-in")
    });
}


/*

function show_todos() {
    console.log("todos")
    $(".todos.hide").removeClass("hide").addClass("fade-in").one('animationend webkitAnimationEnd', function() { 
        $(".todos").removeClass("fade-in")
    });
}

function show_familia() {
    console.log("famiia")
    $(".todos.familia.hide").removeClass("hide").addClass("fade-in").one('animationend webkitAnimationEnd', function() { 
        $(".todos").removeClass("fade-in")
    });
    
    $(".todos:not(.familia):not(.hide)").addClass("fade-out").one('animationend webkitAnimationEnd', function() { 
        $(".todos:not(.familia):not(.hide)").addClass("hide")
        $(".todos:not(.familia)").removeClass("fade-out")
    });
}

function show_gourmet() {
    console.log("goruem")
    $(".todos.gourmet.hide").removeClass("hide").addClass("fade-in").one('animationend webkitAnimationEnd', function() { 
        $(".todos").removeClass("fade-in")
    });
    
    $(".todos:not(.gourmet):not(.hide)").addClass("fade-out").one('animationend webkitAnimationEnd', function() { 
        $(".todos:not(.gourmet):not(.hide)").addClass("hide")
        $(".todos:not(.gourmet)").removeClass("fade-out")
    });
}

function show_pratico() {
    console.log("todos")
    $(".todos.pratico.hide").removeClass("hide").addClass("fade-in").one('animationend webkitAnimationEnd', function() { 
        $(".todos").removeClass("fade-in")
    });
    
    $(".todos:not(.pratico):not(.hide)").addClass("fade-out").one('animationend webkitAnimationEnd', function() { 
        $(".todos:not(.pratico):not(.hide)").addClass("hide")
        $(".todos:not(.pratico)").removeClass("fade-out")
    });
}

*/