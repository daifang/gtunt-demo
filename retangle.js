$(function(){
   var $width = $('#width');
   var $height = $('#height');
   var $btnCal = $('#calculate');
   var $perimeter = $('#perimeter');
   var $area = $('#area');

    $btnCal.click(function(){
        var w =Number($width.val()).toFixed(2) ,
            h = Number($height.val()).toFixed(2);

        if(w.indexOf('.') && h.indexOf('.')){
            var wLength = w.split('.')[1].length;
            var hLength = h.split('.')[1].length;
            var p = 2 * roundFractional(Number(w) + Number(h),wLength>hLength?wLength+1:hLength+1),
            a = roundFractional( Number(w) * Number(h),(wLength) + (hLength));
        }else{
            var p = 2 * (Number(w) + Number(h)),
            a = ( Number(w) * Number(h));
        }
            $perimeter.val(p);
            $area.val(a);
    })

    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
      }

})