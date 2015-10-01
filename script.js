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

function getQuote() {
  var quoteWidth = closest(widthArray, $('#quoteWidth').val());
  var quoteHeight = closest(heightArray, $('#quoteHeight').val());
  var quoteFabric = $('#fabricQuote').val();
  var quoteLining = $('#liningQuote').val();
  var lining = 0;
  if (quoteWidth === undefined) {
    alert('Please choose a width between 0 and 180"');
  } else if (quoteHeight === undefined) {
    alert('Please choose a height between 0 and 144"');
  }
  if (quoteLining != 'none') {
    lining = drapes[quoteLining][quoteWidth][quoteHeight]['price'];
  }
  if (quoteFabric != 'Select Fabric') {
    var price = drapes[quoteFabric][quoteWidth][quoteHeight]['price'];
    setQuote(price + lining);
  }
}
function setQuote(amount) {
  $('#quoteAmount').text(amount);
}

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

    if (fabric == 'Select Fabric') {
      alert('Please select a fabric');
    } else if (buyWidth === undefined) {
      alert('Please choose a total width between 0 and 180"');
    } else if (buyHeight === undefined) {
      alert('Please choose a height between 0 and 144"');
    }

    return drapes[fabric][buyWidth][buyHeight]['id'];
}

var drapes = {
  breezetan: {
    28: {
      60: { id: 5815672581, price: 61 },
      72: { id: 5815672645, price: 69 },
      84: { id: 5815672709, price: 76 },
      96: { id: 5815672773, price: 82 },
      120: { id: 5815672837, price: 97 },
      144: { id: 5815672901, price: 114 }
    },
    40: {
      60: { id: 5815672965, price: 71 },
      72: { id: 5815673029, price: 80 },
      84: { id: 5815673093, price: 88 },
      96: { id: 5815673157, price: 97 },
      120: { id: 5815673221, price: 113 },
      144: { id: 5815673285, price: 130 }
    },
    52: {
      60: { id: 5815673349, price: 78 },
      72: { id: 5815673413, price: 87 },
      84: { id: 5815673477, price: 96 },
      96: { id: 5815673541, price: 104 },
      120: { id: 5815673605, price: 122 },
      144: { id: 5815673669, price: 139 }
    },
    64: {
      60: { id: 5815673733, price: 107 },
      72: { id: 5815673797, price: 119 },
      84: { id: 5815673861, price: 132 },
      96: { id: 5815673925, price: 144 },
      120: { id: 5815673989, price: 169 },
      144: { id: 5815674053, price: 194 }
    },
    78: {
      60: { id: 5815674117, price: 128 },
      72: { id: 5815674181, price: 143 },
      84: { id: 5815674245, price: 158 },
      96: { id: 5815674309, price: 172 },
      120: { id: 5815674373, price: 202 },
      144: { id: 5815674437, price: 232 }
    },
    90: {
      60: { id: 5815674501, price: 148 },
      72: { id: 5815674565, price: 165 },
      84: { id: 5815674629, price: 182 },
      96: { id: 5815674693, price: 199 },
      120: { id: 5815674757, price: 233 },
      144: { id: 5815674821, price: 267 }
    },
    112: {
      60: { id: 5815674885, price: 183 },
      72: { id: 5815674949, price: 204 },
      84: { id: 5815675013, price: 224 },
      96: { id: 5815675077, price: 245 },
      120: { id: 5815675141, price: 287 },
      144: { id: 5815675205, price: 329 }
    },
    135: {
      60: { id: 5815675269, price: 218 },
      72: { id: 5815675333, price: 243 },
      84: { id: 5815675397, price: 268 },
      96: { id: 5815675461, price: 292 },
      120: { id: 5815675525, price: 342 },
      144: { id: 5815675589, price: 392 }
    },
    157: {
      60: { id: 5815675653, price: 252 },
      72: { id: 5815675717, price: 281 },
      84: { id: 5815675781, price: 310 },
      96: { id: 5815675845, price: 339 },
      120: { id: 5815675909, price: 420 },
      144: { id: 5815675973, price: 510 }
    },
    180: {
      60: { id: 5815676037, price: 287 },
      72: { id: 5815676101, price: 320 },
      84: { id: 5815676165, price: 352 },
      96: { id: 5815676229, price: 385 },
      120: { id: 5815676293, price: 451 },
      144: { id: 5815676357, price: 556 }
    }
  },
  breezenatural: {
    28: {
      60: { id: 6632757701, price: 61 },
      72: { id: 6632757765, price: 69 },
      84: { id: 6632757829, price: 76 },
      96: { id: 6632757893, price: 82 },
      120: { id: 6632757957, price: 97 },
      144: { id: 6632758021, price: 114 }
    },
    40: {
      60: { id: 6632758085, price: 71 },
      72: { id: 6632758149, price: 80 },
      84: { id: 6632758213, price: 88 },
      96: { id: 6632758277, price: 97 },
      120: { id: 6632758341, price: 113 },
      144: { id: 6632758405, price: 130 }
    },
    52: {
      60: { id: 6632758469, price: 78 },
      72: { id: 6632758533, price: 87 },
      84: { id: 6632758597, price: 96 },
      96: { id: 6632758661, price: 104 },
      120: { id: 6632758725, price: 122 },
      144: { id: 6632758789, price: 139 }
    },
    64: {
      60: { id: 6632758853, price: 107 },
      72: { id: 6632758917, price: 119 },
      84: { id: 6632758981, price: 132 },
      96: { id: 6632759045, price: 144 },
      120: { id: 6632759109, price: 169 },
      144: { id: 6632759173, price: 194 }
    },
    78: {
      60: { id: 6632759237, price: 128 },
      72: { id: 6632759301, price: 143 },
      84: { id: 6632759365, price: 158 },
      96: { id: 6632759429, price: 172 },
      120: { id: 6632759493, price: 202 },
      144: { id: 6632759557, price: 232 }
    },
    90: {
      60: { id: 6632759621, price: 148 },
      72: { id: 6632759685, price: 165 },
      84: { id: 6632759749, price: 182 },
      96: { id: 6632759813, price: 199 },
      120: { id: 6632759877, price: 233 },
      144: { id: 6632759941, price: 267 }
    },
    112: {
      60: { id: 6632760005, price: 183 },
      72: { id: 6632760069, price: 204 },
      84: { id: 6632760133, price: 224 },
      96: { id: 6632760197, price: 245 },
      120: { id: 6632760261, price: 287 },
      144: { id: 6632760325, price: 329 }
    },
    135: {
      60: { id: 6632760389, price: 218 },
      72: { id: 6632760453, price: 243 },
      84: { id: 6632760517, price: 268 },
      96: { id: 6632760581, price: 292 },
      120: { id: 6632760645, price: 342 },
      144: { id: 6632760709, price: 392 }
    },
    157: {
      60: { id: 6632760773, price: 252 },
      72: { id: 6632760837, price: 281 },
      84: { id: 6632760901, price: 310 },
      96: { id: 6632760965, price: 339 },
      120: { id: 6632761029, price: 420 },
      144: { id: 6632761093, price: 510 }
    },
    180: {
      60: { id: 6632761157, price: 287 },
      72: { id: 6632761221, price: 320 },
      84: { id: 6632761285, price: 352 },
      96: { id: 6632761349, price: 385 },
      120: { id: 6632761413, price: 451 },
      144: { id: 6632761477, price: 556 }
    }
  },
  clouds: {
    28: {
      60: { id: 6549308997, price: 48 },
      72: { id: 6549309061, price: 53 },
      84: { id: 6549309125, price: 55 },
      96: { id: 6549309189, price: 64 },
      120: { id: 6549309253, price: 77 },
      144: { id: 6549309317, price: 89 }
    },
    40: {
      60: { id: 6549309381, price: 54 },
      72: { id: 6549309445, price: 61 },
      84: { id: 6549309509, price: 63 },
      96: { id: 6549309573, price: 72 },
      120: { id: 6549309637, price: 95 },
      144: { id: 6549309701, price: 101 }
    },
    52: {
      60: { id: 6549309765, price: 64 },
      72: { id: 6549309829, price: 70 },
      84: { id: 6549309893, price: 73 },
      96: { id: 6549309957, price: 84 },
      120: { id: 6549310021, price: 116 },
      144: { id: 6549310085, price: 122 }
    },
    64: {
      60: { id: 6549310149, price: 73 },
      72: { id: 6549310213, price: 80 },
      84: { id: 6549310277, price: 84 },
      96: { id: 6549310341, price: 95 },
      120: { id: 6549310405, price: 130 },
      144: { id: 6549310533, price: 138 }
    },
    78: {
      60: { id: 6549310597, price: 91 },
      72: { id: 6549310661, price: 101 },
      84: { id: 6549310725, price: 105 },
      96: { id: 6549310789, price: 120 },
      120: { id: 6549310853, price: 165 },
      144: { id: 6549310917, price: 174 }
    },
    90: {
      60: { id: 6549310981, price: 109 },
      72: { id: 6549311045, price: 121 },
      84: { id: 6549311109, price: 126 },
      96: { id: 6549311173, price: 144 },
      120: { id: 6549311237, price: 200 },
      144: { id: 6549311301, price: 210 }
    },
    112: {
      60: { id: 6549311365, price: 133 },
      72: { id: 6549311429, price: 147 },
      84: { id: 6549311493, price: 152 },
      96: { id: 6549311557, price: 175 },
      120: { id: 6549311621, price: 242 },
      144: { id: 2266864389, price: 253 }
    },
    135: {
      60: { id: 6549311749, price: 156 },
      72: { id: 6549311813, price: 172 },
      84: { id: 6549311877, price: 180 },
      96: { id: 6549311941, price: 205 },
      120: { id: 6549312005, price: 284 },
      144: { id: 6549312069, price: 298 }
    },
    157: {
      60: { id: 6549312133, price: 202 },
      72: { id: 6549312197, price: 224 },
      84: { id: 6549312261, price: 232 },
      96: { id: 6549312325, price: 303 },
      120: { id: 6549312389, price: 375 },
      144: { id: 6549312453, price: 391 }
    },
    180: {
      60: { id: 6549312517, price: 214 },
      72: { id: 6549312581, price: 237 },
      84: { id: 6549312645, price: 246 },
      96: { id: 6549312709, price: 282 },
      120: { id: 6549312901, price: 336 },
      144: { id: 6549312965, price: 410 }
    }
  },
  sand: {
    28: {
      60: { id: 5815458757, price: 57 },
      72: { id: 5815530757, price: 64 },
      84: { id: 5815530821, price: 67 },
      96: { id: 5815530885, price: 77 },
      120: { id: 5815530949, price: 92 },
      144: { id: 5815531013, price: 108 }
    },
    40: {
      60: { id: 5815531077, price: 66 },
      72: { id: 5815531141, price: 74 },
      84: { id: 5815531205, price: 77 },
      96: { id: 5815531269, price: 88 },
      120: { id: 5815531333, price: 105 },
      144: { id: 5815531397, price: 123 }
    },
    52: {
      60: { id: 5815531461, price: 75 },
      72: { id: 5815531525, price: 84 },
      84: { id: 5815531589, price: 88 },
      96: { id: 5815531653, price: 101 },
      120: { id: 5815531717, price: 121 },
      144: { id: 5815531781, price: 147 }
    },
    64: {
      60: { id: 5815531845, price: 87 },
      72: { id: 5815531909, price: 98 },
      84: { id: 5815531973, price: 103 },
      96: { id: 5815532037, price: 117 },
      120: { id: 5815532101, price: 140 },
      144: { id: 5815532165, price: 168 }
    },
    78: {
      60: { id: 5815532229, price: 110 },
      72: { id: 5815532293, price: 123 },
      84: { id: 5815532357, price: 142 },
      96: { id: 5815532421, price: 148 },
      120: { id: 5815532485, price: 177 },
      144: { id: 5815532549, price: 213 }
    },
    90: {
      60: { id: 5815532613, price: 132 },
      72: { id: 5815532677, price: 148 },
      84: { id: 5815532741, price: 171 },
      96: { id: 5815532805, price: 178 },
      120: { id: 5815532869, price: 212 },
      144: { id: 5815532933, price: 256 }
    },
    112: {
      60: { id: 5815532997, price: 161 },
      72: { id: 5815533061, price: 180 },
      84: { id: 5815533125, price: 207 },
      96: { id: 5815533189, price: 216 },
      120: { id: 5815533253, price: 257 },
      144: { id: 5815533317, price: 311 }
    },
    135: {
      60: { id: 5815533381, price: 189 },
      72: { id: 5815533445, price: 212 },
      84: { id: 5815533509, price: 244 },
      96: { id: 5815533573, price: 254 },
      120: { id: 5815533637, price: 303 },
      144: { id: 5815533701, price: 365 }
    },
    157: {
      60: { id: 5815533765, price: 245 },
      72: { id: 5815533829, price: 275 },
      84: { id: 5815533893, price: 286 },
      96: { id: 5815533957, price: 297 },
      120: { id: 5815534021, price: 394 },
      144: { id: 5815534149, price: 478 }
    },
    180: {
      60: { id: 5815534213, price: 260 },
      72: { id: 5815534277, price: 291 },
      84: { id: 5815534341, price: 304 },
      96: { id: 5815534405, price: 349 },
      120: { id: 5815534469, price: 417 },
      144: { id: 5815534533, price: 504 }
    }
  },
  seashore: {
    28: {
      60: { id: 5815637829, price: 59 },
      72: { id: 5815637893, price: 65 },
      84: { id: 5815637957, price: 71 },
      96: { id: 5815638021, price: 79 },
      120: { id: 5815638085, price: 94 },
      144: { id: 5815638149, price: 112 }
    },
    40: {
      60: { id: 5815638213, price: 67 },
      72: { id: 5815638277, price: 75 },
      84: { id: 5815638341, price: 82 },
      96: { id: 5815638405, price: 90 },
      120: { id: 5815638469, price: 105 },
      144: { id: 5815638533, price: 128 }
    },
    52: {
      60: { id: 5815638597, price: 73 },
      72: { id: 5815638661, price: 81 },
      84: { id: 5815638725, price: 89 },
      96: { id: 5815638789, price: 98 },
      120: { id: 5815638853, price: 114 },
      144: { id: 5815638917, price: 152 }
    },
    64: {
      60: { id: 5815638981, price: 100 },
      72: { id: 5815639045, price: 111 },
      84: { id: 5815639109, price: 123 },
      96: { id: 5815639173, price: 134 },
      120: { id: 5815639237, price: 156 },
      144: { id: 5815639301, price: 177 }
    },
    78: {
      60: { id: 5815639365, price: 119 },
      72: { id: 5815639429, price: 133 },
      84: { id: 5815639493, price: 146 },
      96: { id: 5815639557, price: 160 },
      120: { id: 5815639621, price: 187 },
      144: { id: 5815639685, price: 223 }
    },
    90: {
      60: { id: 5815639749, price: 138 },
      72: { id: 5815639813, price: 154 },
      84: { id: 5815639877, price: 169 },
      96: { id: 5815639941, price: 185 },
      120: { id: 5815640005, price: 215 },
      144: { id: 5815640069, price: 268 }
    },
    112: {
      60: { id: 5815640133, price: 170 },
      72: { id: 5815640197, price: 189 },
      84: { id: 5815640261, price: 208 },
      96: { id: 5815640325, price: 227 },
      120: { id: 5815640389, price: 265 },
      144: { id: 5815640453, price: 325 }
    },
    135: {
      60: { id: 5815640517, price: 203 },
      72: { id: 5815640581, price: 226 },
      84: { id: 5815640645, price: 248 },
      96: { id: 5815640709, price: 271 },
      120: { id: 5815640773, price: 316 },
      144: { id: 5815640837, price: 383 }
    },
    157: {
      60: { id: 5815640901, price: 235 },
      72: { id: 5815640965, price: 261 },
      84: { id: 5815641029, price: 287 },
      96: { id: 5815641093, price: 313 },
      120: { id: 5815641157, price: 411 },
      144: { id: 5815641221, price: 499 }
    },
    180: {
      60: { id: 5815641285, price: 267 },
      72: { id: 5815641349, price: 298 },
      84: { id: 5815641413, price: 327 },
      96: { id: 5815641477, price: 356 },
      120: { id: 5815641541, price: 437 },
      144: { id: 5815641605, price: 527 }
    }
  },
  sunset: {
    28: {
      60: { id: 6548727173, price: 65 },
      72: { id: 6548727237, price: 72 },
      84: { id: 6548727301, price: 79 },
      96: { id: 6548727365, price: 86 },
      120: { id: 6548727429, price: 100 },
      144: { id: 6548727493, price: 116 }
    },
    40: {
      60: { id: 6548727557, price: 77 },
      72: { id: 6548727621, price: 87 },
      84: { id: 6548727685, price: 97 },
      96: { id: 6548727749, price: 106 },
      120: { id: 6548727813, price: 125 },
      144: { id: 6548727877, price: 143 }
    },
    52: {
      60: { id: 6548727941, price: 85 },
      72: { id: 6548728005, price: 95 },
      84: { id: 6548728069, price: 104 },
      96: { id: 6548728133, price: 114 },
      120: { id: 6548728197, price: 134 },
      144: { id: 6548728261, price: 153 }
    },
    64: {
      60: { id: 6548728325, price: 117 },
      72: { id: 6548728389, price: 131 },
      84: { id: 6548728453, price: 145 },
      96: { id: 6548728517, price: 159 },
      120: { id: 6548728581, price: 187 },
      144: { id: 6548728645, price: 215 }
    },
    78: {
      60: { id: 6548728709, price: 140 },
      72: { id: 6548728773, price: 157 },
      84: { id: 6548728837, price: 173 },
      96: { id: 6548728901, price: 190 },
      120: { id: 6548728965, price: 224 },
      144: { id: 6548729029, price: 257 }
    },
    90: {
      60: { id: 6548729093, price: 162 },
      72: { id: 6548729221, price: 182 },
      84: { id: 6548729285, price: 201 },
      96: { id: 6548729349, price: 220 },
      120: { id: 6548729413, price: 258 },
      144: { id: 6548729477, price: 297 }
    },
    112: {
      60: { id: 6548729541, price: 200 },
      72: { id: 6548729605, price: 224 },
      84: { id: 6548729669, price: 247 },
      96: { id: 6548729733, price: 271 },
      120: { id: 6548729797, price: 319 },
      144: { id: 6548729861, price: 366 }
    },
    135: {
      60: { id: 6548729925, price: 239 },
      72: { id: 6548729989, price: 267 },
      84: { id: 6548730053, price: 295 },
      96: { id: 6548730117, price: 323 },
      120: { id: 6548730181, price: 380 },
      144: { id: 6548730309, price: 436 }
    },
    157: {
      60: { id: 6548730373, price: 277 },
      72: { id: 6548730437, price: 310 },
      84: { id: 6548730501, price: 342 },
      96: { id: 6548730629, price: 375 },
      120: { id: 6548730693, price: 450 },
      144: { id: 6548730757, price: 520 }
    },
    180: {
      60: { id: 6548730821, price: 315 },
      72: { id: 6548730885, price: 353 },
      84: { id: 6548730949, price: 389 },
      96: { id: 6548731013, price: 427 },
      120: { id: 6548731077, price: 501 },
      144: { id: 6548731141, price: 575 }
    }
  },
  shadow: {
    28: {
      60: { id: 6548956165, price: 67 },
      72: { id: 6548956229, price: 75 },
      84: { id: 6548956293, price: 82 },
      96: { id: 6548956357, price: 90 },
      120: { id: 6548956421, price: 102 },
      144: { id: 6548956485, price: 120 }
    },
    40: {
      60: { id: 6548956549, price: 81 },
      72: { id: 6548956613, price: 91 },
      84: { id: 6548956677, price: 101 },
      96: { id: 6548956741, price: 111 },
      120: { id: 6548956805, price: 130 },
      144: { id: 6548956869, price: 150 }
    },
    52: {
      60: { id: 6548956933, price: 88 },
      72: { id: 6548956997, price: 98 },
      84: { id: 6548957061, price: 109 },
      96: { id: 6548957125, price: 119 },
      120: { id: 6548957189, price: 140 },
      144: { id: 6548957253, price: 160 }
    },
    64: {
      60: { id: 6548957317, price: 122 },
      72: { id: 6548957381, price: 136 },
      84: { id: 6548957445, price: 151 },
      96: { id: 6548957509, price: 166 },
      120: { id: 6548957573, price: 196 },
      144: { id: 6548957637, price: 225 }
    },
    78: {
      60: { id: 6548957701, price: 146 },
      72: { id: 6548957765, price: 164 },
      84: { id: 6548957829, price: 181 },
      96: { id: 6548957893, price: 199 },
      120: { id: 6548957957, price: 234 },
      144: { id: 6548958021, price: 270 }
    },
    90: {
      60: { id: 6548958085, price: 169 },
      72: { id: 6548958149, price: 190 },
      84: { id: 6548958213, price: 210 },
      96: { id: 6548958277, price: 230 },
      120: { id: 6548958341, price: 271 },
      144: { id: 6548958405, price: 311 }
    },
    112: {
      60: { id: 6548958469, price: 209 },
      72: { id: 6548958533, price: 234 },
      84: { id: 6548958597, price: 259 },
      96: { id: 6548958661, price: 284 },
      120: { id: 6548958725, price: 334 },
      144: { id: 6548958789, price: 384 }
    },
    135: {
      60: { id: 6548958853, price: 250 },
      72: { id: 6548958917, price: 279 },
      84: { id: 6548958981, price: 309 },
      96: { id: 6548959045, price: 339 },
      120: { id: 6548959109, price: 398 },
      144: { id: 6548959173, price: 458 }
    },
    157: {
      60: { id: 6548959237, price: 289 },
      72: { id: 6548959301, price: 324 },
      84: { id: 6548959365, price: 358 },
      96: { id: 6548959429, price: 393 },
      120: { id: 6548959493, price: 462 },
      144: { id: 6548959621, price: 531 }
    },
    180: {
      60: { id: 6548959685, price: 329 },
      72: { id: 6548959749, price: 369 },
      84: { id: 6548959813, price: 408 },
      96: { id: 6548959877, price: 447 },
      120: { id: 6548959941, price: 526 },
      144: { id: 6548960005, price: 605 }
    }
  },
  twilightbeige: {
    28: {
      60: { id: 6548485381, price: 69 },
      72: { id: 6548485445, price: 78 },
      84: { id: 6548485509, price: 87 },
      96: { id: 6548485573, price: 97 },
      120: { id: 6548485637, price: 110 },
      144: { id: 6548485701, price: 126 }
    },
    40: {
      60: { id: 6548485765, price: 81 },
      72: { id: 6548485829, price: 92 },
      84: { id: 6548485893, price: 102 },
      96: { id: 6548485957, price: 112 },
      120: { id: 6548486021, price: 132 },
      144: { id: 6548486085, price: 152 }
    },
    52: {
      60: { id: 6548486149, price: 89 },
      72: { id: 6548486213, price: 99 },
      84: { id: 6548486277, price: 110 },
      96: { id: 6548486341, price: 120 },
      120: { id: 6548486405, price: 141 },
      144: { id: 6548486469, price: 162 }
    },
    64: {
      60: { id: 6548486533, price: 124 },
      72: { id: 6548486597, price: 138 },
      84: { id: 6548486661, price: 153 },
      96: { id: 6548486725, price: 168 },
      120: { id: 6548486789, price: 198 },
      144: { id: 6548486853, price: 227 }
    },
    78: {
      60: { id: 6548486917, price: 147 },
      72: { id: 6548486981, price: 166 },
      84: { id: 6548487045, price: 183 },
      96: { id: 6548487109, price: 201 },
      120: { id: 6548487173, price: 237 },
      144: { id: 6548487237, price: 273 }
    },
    90: {
      60: { id: 6548487301, price: 171 },
      72: { id: 6548487365, price: 192 },
      84: { id: 6548487429, price: 212 },
      96: { id: 6548487493, price: 233 },
      120: { id: 6548487557, price: 274 },
      144: { id: 6548487621, price: 315 }
    },
    112: {
      60: { id: 6548487685, price: 211 },
      72: { id: 6548487749, price: 237 },
      84: { id: 6548487813, price: 262 },
      96: { id: 6548487877, price: 287 },
      120: { id: 6548487941, price: 338 },
      144: { id: 6548488005, price: 389 }
    },
    135: {
      60: { id: 6548488069, price: 252 },
      72: { id: 6548488133, price: 282 },
      84: { id: 6548488197, price: 313 },
      96: { id: 6548488261, price: 343 },
      120: { id: 6548488389, price: 403 },
      144: { id: 6548488453, price: 463 }
    },
    157: {
      60: { id: 6548488517, price: 292 },
      72: { id: 6548488581, price: 327 },
      84: { id: 6548488645, price: 362 },
      96: { id: 6548488709, price: 397 },
      120: { id: 6548488773, price: 467 },
      144: { id: 6548488837, price: 537 }
    },
    180: {
      60: { id: 6548488901, price: 333 },
      72: { id: 6548488965, price: 373 },
      84: { id: 6548489029, price: 412 },
      96: { id: 6548489093, price: 452 },
      120: { id: 6548489157, price: 532 },
      144: { id: 6548489221, price: 612 }
    }
  },
  twilightgrey: {
    28: {
      60: { id: 6632820805, price: 69 },
      72: { id: 6632820869, price: 78 },
      84: { id: 6632820933, price: 87 },
      96: { id: 6632820997, price: 97 },
      120: { id: 6632821061, price: 110 },
      144: { id: 6632821125, price: 126 }
    },
    40: {
      60: { id: 6632821189, price: 81 },
      72: { id: 6632821253, price: 92 },
      84: { id: 6632821317, price: 102 },
      96: { id: 6632821381, price: 112 },
      120: { id: 6632821445, price: 132 },
      144: { id: 6632821509, price: 152 }
    },
    52: {
      60: { id: 6632821573, price: 89 },
      72: { id: 6632821637, price: 99 },
      84: { id: 6632821701, price: 110 },
      96: { id: 6632821765, price: 120 },
      120: { id: 6632821829, price: 141 },
      144: { id: 6632821893, price: 162 }
    },
    64: {
      60: { id: 6632821957, price: 124 },
      72: { id: 6632822021, price: 138 },
      84: { id: 6632822085, price: 153 },
      96: { id: 6632822149, price: 168 },
      120: { id: 6632822213, price: 198 },
      144: { id: 6632822277, price: 227 }
    },
    78: {
      60: { id: 6632822341, price: 147 },
      72: { id: 6632822405, price: 166 },
      84: { id: 6632822469, price: 183 },
      96: { id: 6632822533, price: 201 },
      120: { id: 6632822661, price: 237 },
      144: { id: 6632822725, price: 273 }
    },
    90: {
      60: { id: 6632822789, price: 171 },
      72: { id: 6632822853, price: 192 },
      84: { id: 6632822917, price: 212 },
      96: { id: 6632822981, price: 233 },
      120: { id: 6632823045, price: 274 },
      144: { id: 6632823109, price: 315 }
    },
    112: {
      60: { id: 6632823173, price: 211 },
      72: { id: 6632823237, price: 237 },
      84: { id: 6632823301, price: 262 },
      96: { id: 6632823365, price: 287 },
      120: { id: 6632823429, price: 338 },
      144: { id: 6632823493, price: 389 }
    },
    135: {
      60: { id: 6632823557, price: 252 },
      72: { id: 6632823621, price: 282 },
      84: { id: 6632823685, price: 313 },
      96: { id: 6632823749, price: 343 },
      120: { id: 6632823813, price: 403 },
      144: { id: 6632823877, price: 463 }
    },
    157: {
      60: { id: 6632823941, price: 292 },
      72: { id: 6632824005, price: 327 },
      84: { id: 6632824069, price: 362 },
      96: { id: 6632824133, price: 397 },
      120: { id: 6632824197, price: 467 },
      144: { id: 6632824261, price: 537 }
    },
    180: {
      60: { id: 6632824325, price: 333 },
      72: { id: 6632824389, price: 373 },
      84: { id: 6632824453, price: 412 },
      96: { id: 6632824517, price: 452 },
      120: { id: 6632824581, price: 532 },
      144: { id: 6632824645, price: 612 }
    }
  },
  coral: {
    28: {
      60: { id: 6548030149, price: 71 },
      72: { id: 6548030213, price: 82 },
      84: { id: 6548030277, price: 90 },
      96: { id: 6548030341, price: 100 },
      120: { id: 6548030405, price: 115 },
      144: { id: 6548030469, price: 130 }
    },
    40: {
      60: { id: 6548030533, price: 82 },
      72: { id: 6548030597, price: 93 },
      84: { id: 6548030661, price: 103 },
      96: { id: 6548030725, price: 113 },
      120: { id: 6548030789, price: 134 },
      144: { id: 6548030853, price: 154 }
    },
    52: {
      60: { id: 6548030917, price: 90 },
      72: { id: 6548030981, price: 101 },
      84: { id: 6548031045, price: 111 },
      96: { id: 6548031109, price: 122 },
      120: { id: 6548031173, price: 143 },
      144: { id: 6548031237, price: 165 }
    },
    64: {
      60: { id: 6548031301, price: 125 },
      72: { id: 6548031365, price: 140 },
      84: { id: 6548031429, price: 155 },
      96: { id: 6548031493, price: 170 },
      120: { id: 6548031621, price: 201 },
      144: { id: 6548031685, price: 231 }
    },
    78: {
      60: { id: 6548031749, price: 150 },
      72: { id: 6548031813, price: 169 },
      84: { id: 6548031877, price: 186 },
      96: { id: 6548032005, price: 204 },
      120: { id: 6548032069, price: 241 },
      144: { id: 6548032133, price: 277 }
    },
    90: {
      60: { id: 6548032197, price: 172 },
      72: { id: 6548032261, price: 195 },
      84: { id: 6548032389, price: 216 },
      96: { id: 6548032453, price: 237 },
      120: { id: 6548032517, price: 278 },
      144: { id: 6548032581, price: 320 }
    },
    112: {
      60: { id: 6548032645, price: 214 },
      72: { id: 6548032773, price: 240 },
      84: { id: 6548032837, price: 266 },
      96: { id: 6548032901, price: 292 },
      120: { id: 6548032965, price: 344 },
      144: { id: 6548033029, price: 395 }
    },
    135: {
      60: { id: 6548033093, price: 256 },
      72: { id: 6548033221, price: 287 },
      84: { id: 6548033285, price: 318 },
      96: { id: 6548033349, price: 348 },
      120: { id: 6548033413, price: 410 },
      144: { id: 6548033477, price: 471 }
    },
    157: {
      60: { id: 6548033605, price: 296 },
      72: { id: 6548033669, price: 332 },
      84: { id: 6548033733, price: 368 },
      96: { id: 6548033797, price: 404 },
      120: { id: 6548033861, price: 475 },
      144: { id: 6548033925, price: 546 }
    },
    180: {
      60: { id: 6548033989, price: 338 },
      72: { id: 6548034053, price: 379 },
      84: { id: 6548034117, price: 419 },
      96: { id: 6548034181, price: 460 },
      120: { id: 6548034245, price: 541 },
      144: { id: 6548034309, price: 622 }
    }
  },
  tradewinds: {
    28: {
      60: { id: 6547600389, price: 73 },
      72: { id: 6547600453, price: 87 },
      84: { id: 6547600517, price: 93 },
      96: { id: 6547600581, price: 107 },
      120: { id: 6547600645, price: 117 },
      144: { id: 6547600709, price: 133 }
    },
    40: {
      60: { id: 6547600773, price: 84 },
      72: { id: 6547600837, price: 95 },
      84: { id: 6547600901, price: 105 },
      96: { id: 6547600965, price: 115 },
      120: { id: 6547601029, price: 136 },
      144: { id: 6547601093, price: 157 }
    },
    52: {
      60: { id: 6547601157, price: 91 },
      72: { id: 6547601221, price: 102 },
      84: { id: 6547601285, price: 113 },
      96: { id: 6547601349, price: 124 },
      120: { id: 6547601413, price: 146 },
      144: { id: 6547601477, price: 167 }
    },
    64: {
      60: { id: 6547601541, price: 127 },
      72: { id: 6547601605, price: 142 },
      84: { id: 6547601669, price: 158 },
      96: { id: 6547601733, price: 173 },
      120: { id: 6547601797, price: 204 },
      144: { id: 6547601861, price: 235 }
    },
    78: {
      60: { id: 6547601925, price: 152 },
      72: { id: 6547601989, price: 171 },
      84: { id: 6547602053, price: 189 },
      96: { id: 6547602117, price: 208 },
      120: { id: 6547602181, price: 245 },
      144: { id: 6547602245, price: 282 }
    },
    90: {
      60: { id: 6547602309, price: 176 },
      72: { id: 6547602373, price: 198 },
      84: { id: 6547602437, price: 219 },
      96: { id: 6547602501, price: 241 },
      120: { id: 6547602565, price: 283 },
      144: { id: 6547602629, price: 326 }
    },
    112: {
      60: { id: 6547602693, price: 218 },
      72: { id: 6547602757, price: 244 },
      84: { id: 6547602821, price: 270 },
      96: { id: 6547602885, price: 297 },
      120: { id: 6547602949, price: 350 },
      144: { id: 6547603013, price: 403 }
    },
    135: {
      60: { id: 6547603077, price: 260 },
      72: { id: 6547603141, price: 291 },
      84: { id: 6547603205, price: 323 },
      96: { id: 6547603269, price: 354 },
      120: { id: 6547603333, price: 417 },
      144: { id: 6547603397, price: 480 }
    },
    157: {
      60: { id: 6547603461, price: 301 },
      72: { id: 6547603525, price: 338 },
      84: { id: 6547603589, price: 374 },
      96: { id: 6547603653, price: 411 },
      120: { id: 6547603717, price: 484 },
      144: { id: 6547603781, price: 557 }
    },
    180: {
      60: { id: 6547603845, price: 343 },
      72: { id: 6547603909, price: 385 },
      84: { id: 6547603973, price: 426 },
      96: { id: 6547604037, price: 468 },
      120: { id: 6547604101, price: 551 },
      144: { id: 6547604165, price: 634 }
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
