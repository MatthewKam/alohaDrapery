 $(document).ready(function(){
    $('a[href^="#"]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
    $('.legal_trigger').click(function() {
        var type = $(this).attr('rel');

        if (!$('#' + type).is(':visible')) {
            $('.legal_popover').hide();
            $('#' + type).fadeIn();
        }

    });

    $('.close_legal').click(function() {
        $('.legal_popover').fadeOut();
    });
    $('#nextone').click(function() {
        $('#form2').addClass('show');
        $('#nextone').addClass('hide');

    });
    $('#nexttwo').click(function() {
        $('#form3').addClass('show');
        $('#nexttwo').addClass('hide');

    });
    $('#addmore1').click(function() {
        $('#add2').addClass('show');
        $('#addmore1').addClass('hide');
    });
    $('#addmore2').click(function() {
        $('#add3').addClass('show');
        $('#addmore2').addClass('hide');
        $('#delete2').removeClass('show');
        $('#delete2').addClass('hide');
    });
    $('#addmore3').click(function() {
        $('#add4').addClass('show');
        $('#addmore3').addClass('hide');
        $('#delete3').removeClass('show');
        $('#delete3').addClass('hide');
    });
    $('#addmore4').click(function() {
        $('#add5').addClass('show');
        $('#addmore4').addClass('hide');
        $('#delete4').removeClass('show');
        $('#delete4').addClass('hide');
    });
    $('#addmore5').click(function() {
        $('#add6').addClass('show');
        $('#addmore5').addClass('hide');
        $('#delete5').removeClass('show');
        $('#delete5').addClass('hide');
    });
    $('#addmore6').click(function() {
        $('#add7').addClass('show');
        $('#addmore6').addClass('hide');
        $('#delete6').removeClass('show');
        $('#delete6').addClass('hide');
    });
    $('#addmore7').click(function() {
        $('#add8').addClass('show');
        $('#addmore7').addClass('hide');
        $('#delete7').removeClass('show');
        $('#delete7').addClass('hide');
    });
    $('#addmore8').click(function() {
        $('#add9').addClass('show');
        $('#addmore8').addClass('hide');
        $('#delete8').removeClass('show');
        $('#delete8').addClass('hide');
    });



    $('#delete2').click(function() {
        $('#add2').removeClass('show');
        $('#addmore1').removeClass('hide');
    });
    $('#delete3').click(function() {
        $('#add3').removeClass('show');
        $('#addmore2').removeClass('hide');
        $('#delete2').addClass('show');
    });
    $('#delete4').click(function() {
        $('#add4').removeClass('show');
        $('#addmore3').removeClass('hide');
        $('#delete3').addClass('show');
    });
    $('#delete5').click(function() {
        $('#add5').removeClass('show');
        $('#addmore4').removeClass('hide');
        $('#delete4').addClass('show');
    });
    $('#delete6').click(function() {
        $('#add6').removeClass('show');
        $('#addmore5').removeClass('hide');
        $('#delete5').addClass('show');
    });
    $('#delete7').click(function() {
        $('#add7').removeClass('show');
        $('#addmore6').removeClass('hide');
        $('#delete6').addClass('show');
    });
    $('#delete8').click(function() {
        $('#add8').removeClass('show');
        $('#addmore7').removeClass('hide');
        $('#delete7').addClass('show');
    });
    $('#delete9').click(function() {
        $('#add9').removeClass('show');
        $('#addmore8').removeClass('hide');
        $('#delete8').addClass('show');
    });



});
function addToCart(elem) {
    var f = document.createElement('form');
    f.style.display = 'none';
    elem.parentNode.appendChild(f);
    f.method = 'POST';
    f.action = 'https://alohadrapery-com.myshopify.com/cart/add';
    f.target = 'cartthingy';
    var v = document.createElement('input');
    v.setAttribute('type', 'hidden');
    v.setAttribute('name', 'id');
    v.setAttribute('value', getId(elem));
    f.appendChild(v);
    var r = document.createElement('input');
    r.setAttribute('type', 'hidden');
    r.setAttribute('name', 'return_to');
    r.setAttribute('value', 'back');
    f.appendChild(r);
    var x = document.createElement('input');
    x.setAttribute('type', 'hidden');
    x.setAttribute('name', 'quantity');
    x.setAttribute('value', getQuantity(elem));
    f.appendChild(x);
    var h = document.createElement('input');
    h.setAttribute('type', 'hidden');
    h.setAttribute('name', 'properties[Height]');
    h.setAttribute('value', $(elem).siblings(".height").children()[0].value);
    f.appendChild(h);
    var w = document.createElement('input');
    w.setAttribute('type', 'hidden');
    w.setAttribute('name', 'properties[Width]');
    w.setAttribute('value', $(elem).siblings(".width").children()[0].value);
    f.appendChild(w);
    var lr = document.createElement('input');
    lr.setAttribute('type', 'hidden');
    lr.setAttribute('name', 'properties[Left]');
    lr.setAttribute('value', $(elem).siblings(".leftreturn").children()[0].value);
    f.appendChild(lr);
    var rr = document.createElement('input');
    rr.setAttribute('type', 'hidden');
    rr.setAttribute('name', 'properties[Right]');
    rr.setAttribute('value', $(elem).siblings(".rightreturn").children()[0].value);
    f.appendChild(rr);
    f.submit();
    return false;
}

function getQuantity(elem) {
  return $(elem).siblings(".quantity").children()[0].value;
}
function getId(elem) {
    var buyWidth = closest(widthArray, parseInt($(elem).siblings(".width").children()[0].value, 10) + parseInt($(elem).siblings(".leftreturn").children()[0].value, 10) + parseInt($(elem).siblings(".rightreturn").children()[0].value, 10));
    var buyHeight = closest(heightArray, $(elem).siblings(".height").children()[0].value);
    var fabric = $(elem).siblings(".color").children()[0].value;
    return drapes[fabric][buyWidth][buyHeight];
}

var drapes = {
  breeze: {
    28: {
      60: '5815672581',
      '72': '5815672581',
      '84': '5815672581',
      '96': '5815672581',
      '120': '5815672581',
      '144': '5815672581'
    },
    '40': {
      '60': '5815672581',
      '72': '5815672581',
      '84': '5815672581',
      '96': '5815672581',
      '120': '5815672581',
      '144': '5815672581'
    },
    '52': {
      '60': '5815672581',
      '72': '5815672581',
      '84': '5815672581',
      '96': '5815672581',
      '120': '5815672581',
      '144': '5815672581'
    },
    '64': {
      '60': '5815672581',
      '72': '5815672581',
      '84': '5815672581',
      '96': '5815672581',
      '120': '5815672581',
      '144': '5815672581'
    },
    '78': {
      '60': '5815672581',
      '72': '5815672581',
      '84': '5815672581',
      '96': '5815672581',
      '120': '5815672581',
      '144': '5815672581'
    },
    '90': {
      '60': '5815672581',
      '72': '5815672581',
      '84': '5815672581',
      '96': '5815672581',
      '120': '5815672581',
      '144': '5815672581'
    },
    '112': {
      '60': '5815672581',
      '72': '5815672581',
      '84': '5815672581',
      '96': '5815672581',
      '120': '5815672581',
      '144': '5815672581'
    },
    '135': {
      '60': '5815672581',
      '72': '5815672581',
      '84': '5815672581',
      '96': '5815672581',
      '120': '5815672581',
      '144': '5815672581'
    },
    '157': {
      '60': '5815672581',
      '72': '5815672581',
      '84': '5815672581',
      '96': '5815672581',
      '120': '5815672581',
      '144': '5815672581'
    },
    '180': {
      '60': '5815672581',
      '72': '5815672581',
      '84': '5815672581',
      '96': '5815672581',
      '120': '5815672581',
      '144': '5815672581'
    }
  },
  clouds: {
    28: {
      60: '5815672581',
      72: '5815672581',
      84: '5815672581',
      96: '5815672581',
      120: '5815672581',
      144: '5815672581'
    },
    40: {
      60: '5815672581',
      72: '5815672581',
      84: '5815672581',
      96: '5815672581',
      120: '5815672581',
      144: '5815672581'
    },
    52: {
      60: '5815672581',
      72: '5815672581',
      84: '5815672581',
      96: '5815672581',
      120: '5815672581',
      144: '5815672581'
    },
    64: {
      60: '5815672581',
      72: '5815672581',
      84: '5815672581',
      96: '5815672581',
      120: '5815672581',
      144: '5815672581'
    },
    78: {
      60: '5815672581',
      72: '5815672581',
      84: '5815672581',
      96: '5815672581',
      120: '5815672581',
      144: '5815672581'
    },
    90: {
      60: '5815672581',
      72: '5815672581',
      84: '5815672581',
      96: '5815672581',
      120: '5815672581',
      144: '5815672581'
    },
    112: {
      60: '5815672581',
      72: '5815672581',
      84: '5815672581',
      96: '5815672581',
      120: '5815672581',
      144: '5815672581'
    },
    135: {
      60: '5815672581',
      72: '5815672581',
      84: '5815672581',
      96: '5815672581',
      120: '5815672581',
      144: '5815672581'
    },
    157: {
      60: '5815672581',
      72: '5815672581',
      84: '5815672581',
      96: '5815672581',
      120: '5815672581',
      144: '5815672581'
    },
    180: {
      60: '5815672581',
      72: '5815672581',
      84: '5815672581',
      96: '5815672581',
      120: '5815672581',
      144: '5815672581'
    }
  }
};

var widthArray = [28, 40, 52, 64, 78, 90, 112, 135, 157, 180];
var heightArray = [60, 72, 84, 96, 120, 144];

function closest(arr, target) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] >= target) {
            return arr[i];
        }
    }
}
