/*! js-cookie v3.0.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));

// Paste the entire content of js.cookie.min.js here
/*
function saveFavoriteGames(favorites) {
    Cookies.set('favorite_games', JSON.stringify(favorites), { expires: 365 });
    console.log('Favorites saved:', favorites);
}

function getFavoriteGames() {
    var favorites = Cookies.get('favorite_games');
    if (favorites) {
        return JSON.parse(favorites);
    } else {
        return [];
    }
}

function isGameInFavorites(gameId, favorites) {
    return favorites.indexOf(gameId.toString()) !== -1;
}

function fetchFavoriteGames(favoriteGames) {
    console.log('Fetching favorite games:', favoriteGames);

    jQuery.ajax({
        url: MyAjax.ajaxurl,
        type: 'POST',
        data: {
            action: 'fetch_favorite_games',
            favorite_games: favoriteGames,
        },
        success: function(response) {
            console.log('Favorite games fetched:', response);
            jQuery('#favorite-games-container').html(response);
        },
        error: function(xhr, status, error) {
            console.log('Error fetching favorite games:', xhr, status, error);
        },
    });
}


jQuery(document).ready(function($) {
    console.log('favorites.js is loaded');
    
    var favoriteGames = getFavoriteGames();
    console.log('Favorite games on load:', favoriteGames);

    $('.favorite-game-icon').each(function() {
        var gameId = $(this).data('game-id');
        if (isGameInFavorites(gameId, favoriteGames)) {
            $(this).addClass('fas').removeClass('far');
        }
    });

    $('.favorite-game-icon').on('click', function(event) {
        console.log('favorite-game-icon clicked');
        event.preventDefault();

        var gameId = $(this).data('game-id');
        var favorites = getFavoriteGames();

        if (isGameInFavorites(gameId, favorites)) {
            favorites = favorites.filter(function(item) {
                return item !== gameId.toString();
            });
            saveFavoriteGames(favorites);
            $(this).addClass('far').removeClass('fas');
        } else {
            favorites.push(gameId.toString());
            saveFavoriteGames(favorites);
            $(this).addClass('fas').removeClass('far');
        }
    });

    if ($('body').hasClass('page-template-favorite-games')) {
        fetchFavoriteGames(favoriteGames);
    }
});
*/
function saveFavoriteGames(favorites) {
    Cookies.set('favorite_games', JSON.stringify(favorites), { expires: 365 });
    console.log('Favorites saved:', favorites);
}

function getFavoriteGames() {
    var favorites = Cookies.get('favorite_games');
    if (favorites) {
        return JSON.parse(favorites);
    } else {
        return [];
    }
}

function isGameInFavorites(gameId, favorites) {
    return favorites.indexOf(gameId.toString()) !== -1;
}

function fetchFavoriteGames(favoriteGames) {
    console.log('Fetching favorite games:', favoriteGames);

    jQuery.ajax({
        url: MyAjax.ajaxurl,
        type: 'POST',
        data: {
            action: 'fetch_favorite_games',
            favorite_games: favoriteGames,
        },
        success: function(response) {
            console.log('Favorite games fetched:', response);
            jQuery('#favorite-games-container').html(response);
        },
        error: function(xhr, status, error) {
            console.log('Error fetching favorite games:', xhr, status, error);
        },
    });
}

jQuery(document).ready(function($) {
    console.log('favorites.js is loaded');
    
    var favoriteGames = getFavoriteGames();
    console.log('Favorite games on load:', favoriteGames);

    $('.favorite-game-icon').each(function() {
        var gameId = $(this).data('game-id');
        if (isGameInFavorites(gameId, favoriteGames)) {
            $(this).addClass('fas').removeClass('far');
        }
    });

    $('.favorite-game-icon').on('click', function(event) {
     event.preventDefault();
     event.stopPropagation();

        var gameId = $(this).data('game-id');
        var favorites = getFavoriteGames();

        if (isGameInFavorites(gameId, favorites)) {
    favorites = favorites.filter(function(item) {
        return item !== gameId.toString();
    });
    saveFavoriteGames(favorites);
    $(this).addClass('far').removeClass('fas').attr('title', 'Add to Favorites');
} else {
    favorites.push(gameId.toString());
    saveFavoriteGames(favorites);
    $(this).addClass('fas').removeClass('far').attr('title', 'Remove from Favorites');
}
    });

    if ($('body').hasClass('page-template-favorite-games')) {
        fetchFavoriteGames(favoriteGames);
    }
});
