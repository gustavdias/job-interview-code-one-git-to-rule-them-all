var obj = {
    foo: function(){
        console.log(this);
    }
}

$('body').on('click', obj.foo);
$('li').on('click', function(){
    console.log(this);
    var currentTimes = parseInt($(this).find('span').html());
    $('li span').html(currentTimes+1);
});
