function arrastarElem(elem) {

    var Y = 'undefined';
    var X = 'undefined';
    $(elem).mousedown( () => {

        $('body').mousemove( e => {
                Y =  e.screenY - 150;
                X = e.screenX - 50;
                $(elem).css('cursor', 'grabbing');
                $(elem).css('position', 'absolute');
                $(elem).css('top', Y);
                $(elem).css('left', X);  
        })
    })

    $(elem).mouseup( () => {

        $('body').unbind(); /* Desativamos o mousemove do body */

        $(elem).css('top', Y);
        $(elem).css('left', X);        
        $(elem).css('cursor', 'grab');
    })
}        