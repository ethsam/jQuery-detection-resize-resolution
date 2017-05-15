/*
fonction détéction changement de resolution ou
redimensionnement de fenetre

Condition si résolution est inférieur à 970 alors ont affiche la div
dans le cas contraire la div est display none.
*/

jQuery(window).resize(function(){
    var w = jQuery(window).width();
    if(w < 970) //540 calculé a la base
    {
        jQuery('#slider2').css('display', 'block');
    }
    if(w >= 970) //540 calculé à la base
    {
        jQuery('#slider2').css('display', 'none');
    }
});
