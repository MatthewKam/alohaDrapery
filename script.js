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
      60: 5815672581,
      72: 5815672645,
      84: 5815672709,
      96: 5815672773,
      120: 5815672837,
      144: 5815672901
    },
    40: {
      60: 5815672965,
      72: 5815673029,
      84: 5815673093,
      96: 5815673157,
      120: 5815673221,
      144: 5815673285
    },
    52: {
      60: 5815673349,
      72: 5815673413,
      84: 5815673477,
      96: 5815673541,
      120: 5815673605,
      144: 5815673669
    },
    64: {
      60: 5815673733,
      72: 5815673797,
      84: 5815673861,
      96: 5815673925,
      120: 5815673989,
      144: 5815674053
    },
    78: {
      60: 5815674117,
      72: 5815674181,
      84: 5815674245,
      96: 5815674309,
      120: 5815674373,
      144: 5815674437
    },
    90: {
      60: 5815674501,
      72: 5815674565,
      84: 5815674629,
      96: 5815674693,
      120: 5815674757,
      144: 5815674821
    },
    112: {
      60: 5815674885,
      72: 5815674949,
      84: 5815675013,
      96: 5815675077,
      120: 5815675141,
      144: 5815675205
    },
    135: {
      60: 5815675269,
      72: 5815675333,
      84: 5815675397,
      96: 5815675461,
      120: 5815675525,
      144: 5815675589
    },
    157: {
      60: 5815675653,
      72: 5815675717,
      84: 5815675781,
      96: 5815675845,
      120: 5815675909,
      144: 5815675973
    },
    180: {
      60: 5815676037,
      72: 5815676101,
      84: 5815676165,
      96: 5815676229,
      120: 5815676293,
      144: 5815676357
    }
  },
  clouds: {
    28: {
      60: 6549308997,
      72: 6549309061,
      84: 6549309125,
      96: 6549309189,
      120: 6549309253,
      144: 6549309317
    },
    40: {
      60: 6549309381,
      72: 6549309445,
      84: 6549309509,
      96: 6549309573,
      120: 6549309637,
      144: 6549309701
    },
    52: {
      60: 6549309765,
      72: 6549309829,
      84: 6549309893,
      96: 6549309957,
      120: 6549310021,
      144: 6549310085
    },
    64: {
      60: 6549310149,
      72: 6549310213,
      84: 6549310277,
      96: 6549310341,
      120: 6549310405,
      144: 6549310533
    },
    78: {
      60: 6549310597,
      72: 6549310661,
      84: 6549310725,
      96: 6549310789,
      120: 6549310853,
      144: 6549310917
    },
    90: {
      60: 6549310981,
      72: 6549311045,
      84: 6549311109,
      96: 6549311173,
      120: 6549311237,
      144: 6549311301
    },
    112: {
      60: 6549311365,
      72: 6549311429,
      84: 6549311493,
      96: 6549311557,
      120: 6549311621,
      144: 2266864389
    },
    135: {
      60: 6549311749,
      72: 6549311813,
      84: 6549311877,
      96: 6549311941,
      120: 6549312005,
      144: 6549312069
    },
    157: {
      60: 6549312133,
      72: 6549312197,
      84: 6549312261,
      96: 6549312325,
      120: 6549312389,
      144: 6549312453
    },
    180: {
      60: 6549312517,
      72: 6549312581,
      84: 6549312645,
      96: 6549312709,
      120: 6549312901,
      144: 6549312965
    }
  },
  sand: {
    28: {
      60: 5815458757,
      72: 5815530757,
      84: 5815530821,
      96: 5815530885,
      120: 5815530949,
      144: 5815531013
    },
    40: {
      60: 5815531077,
      72: 5815531141,
      84: 5815531205,
      96: 5815531269,
      120: 5815531333,
      144: 5815531397
    },
    52: {
      60: 5815531461,
      72: 5815531525,
      84: 5815531589,
      96: 5815531653,
      120: 5815531717,
      144: 5815531781
    },
    64: {
      60: 5815531845,
      72: 5815531909,
      84: 5815531973,
      96: 5815532037,
      120: 5815532101,
      144: 5815532165
    },
    78: {
      60: 5815532229,
      72: 5815532293,
      84: 5815532357,
      96: 5815532421,
      120: 5815532485,
      144: 5815532549
    },
    90: {
      60: 5815532613,
      72: 5815532677,
      84: 5815532741,
      96: 5815532805,
      120: 5815532869,
      144: 5815532933
    },
    112: {
      60: 5815532997,
      72: 5815533061,
      84: 5815533125,
      96: 5815533189,
      120: 5815533253,
      144: 5815533317
    },
    135: {
      60: 5815533381,
      72: 5815533445,
      84: 5815533509,
      96: 5815533573,
      120: 5815533637,
      144: 5815533701
    },
    157: {
      60: 5815533765,
      72: 5815533829,
      84: 5815533893,
      96: 5815533957,
      120: 5815534021,
      144: 5815534149
    },
    180: {
      60: 5815534213,
      72: 5815534277,
      84: 5815534341,
      96: 5815534405,
      120: 5815534469,
      144: 5815534533
    }
  },
  seashore: {
    28: {
      60: 5815637829,
      72: 5815637893,
      84: 5815637957,
      96: 5815638021,
      120: 5815638085,
      144: 5815638149
    },
    40: {
      60: 5815638213,
      72: 5815638277,
      84: 5815638341,
      96: 5815638405,
      120: 5815638469,
      144: 5815638533
    },
    52: {
      60: 5815638597,
      72: 5815638661,
      84: 5815638725,
      96: 5815638789,
      120: 5815638853,
      144: 5815638917
    },
    64: {
      60: 5815638981,
      72: 5815639045,
      84: 5815639109,
      96: 5815639173,
      120: 5815639237,
      144: 5815639301
    },
    78: {
      60: 5815639365,
      72: 5815639429,
      84: 5815639493,
      96: 5815639557,
      120: 5815639621,
      144: 5815639685
    },
    90: {
      60: 5815639749,
      72: 5815639813,
      84: 5815639877,
      96: 5815639941,
      120: 5815640005,
      144: 5815640069
    },
    112: {
      60: 5815640133,
      72: 5815640197,
      84: 5815640261,
      96: 5815640325,
      120: 5815640389,
      144: 5815640453
    },
    135: {
      60: 5815640517,
      72: 5815640581,
      84: 5815640645,
      96: 5815640709,
      120: 5815640773,
      144: 5815640837
    },
    157: {
      60: 5815640901,
      72: 5815640965,
      84: 5815641029,
      96: 5815641093,
      120: 5815641157,
      144: 5815641221
    },
    180: {
      60: 5815641285,
      72: 5815641349,
      84: 5815641413,
      96: 5815641477,
      120: 5815641541,
      144: 5815641605
    }
  },
  sunset: {
    28: {
      60: 6548727173,
      72: 6548727237,
      84: 6548727301,
      96: 6548727365,
      120: 6548727429,
      144: 6548727493
    },
    40: {
      60: 6548727557,
      72: 6548727621,
      84: 6548727685,
      96: 6548727749,
      120: 6548727813,
      144: 6548727877
    },
    52: {
      60: 6548727941,
      72: 6548728005,
      84: 6548728069,
      96: 6548728133,
      120: 6548728197,
      144: 6548728261
    },
    64: {
      60: 6548728325,
      72: 6548728389,
      84: 6548728453,
      96: 6548728517,
      120: 6548728581,
      144: 6548728645
    },
    78: {
      60: 6548728709,
      72: 6548728773,
      84: 6548728837,
      96: 6548728901,
      120: 6548728965,
      144: 6548729029
    },
    90: {
      60: 6548729093,
      72: 6548729221,
      84: 6548729285,
      96: 6548729349,
      120: 6548729413,
      144: 6548729477
    },
    112: {
      60: 6548729541,
      72: 6548729605,
      84: 6548729669,
      96: 6548729733,
      120: 6548729797,
      144: 6548729861
    },
    135: {
      60: 6548729925,
      72: 6548729989,
      84: 6548730053,
      96: 6548730117,
      120: 6548730181,
      144: 6548730309
    },
    157: {
      60: 6548730373,
      72: 6548730437,
      84: 6548730501,
      96: 6548730629,
      120: 6548730693,
      144: 6548730757
    },
    180: {
      60: 6548730821,
      72: 6548730885,
      84: 6548730949,
      96: 6548731013,
      120: 6548731077,
      144: 6548731141
    }
  },
  shadow: {
    28: {
      60: 6548956165,
      72: 6548956229,
      84: 6548956293,
      96: 6548956357,
      120: 6548956421,
      144: 6548956485
    },
    40: {
      60: 6548956549,
      72: 6548956613,
      84: 6548956677,
      96: 6548956741,
      120: 6548956805,
      144: 6548956869
    },
    52: {
      60: 6548956933,
      72: 6548956997,
      84: 6548957061,
      96: 6548957125,
      120: 6548957189,
      144: 6548957253
    },
    64: {
      60: 6548957317,
      72: 6548957381,
      84: 6548957445,
      96: 6548957509,
      120: 6548957573,
      144: 6548957637
    },
    78: {
      60: 6548957701,
      72: 6548957765,
      84: 6548957829,
      96: 6548957893,
      120: 6548957957,
      144: 6548958021
    },
    90: {
      60: 6548958085,
      72: 6548958149,
      84: 6548958213,
      96: 6548958277,
      120: 6548958341,
      144: 6548958405
    },
    112: {
      60: 6548958469,
      72: 6548958533,
      84: 6548958597,
      96: 6548958661,
      120: 6548958725,
      144: 6548958789
    },
    135: {
      60: 6548958853,
      72: 6548958917,
      84: 6548958981,
      96: 6548959045,
      120: 6548959109,
      144: 6548959173
    },
    157: {
      60: 6548959237,
      72: 6548959301,
      84: 6548959365,
      96: 6548959429,
      120: 6548959493,
      144: 6548959621
    },
    180: {
      60: 6548959685,
      72: 6548959749,
      84: 6548959813,
      96: 6548959877,
      120: 6548959941,
      144: 6548960005
    }
  },
  twilight: {
    28: {
      60: 6548485381,
      72: 6548485445,
      84: 6548485509,
      96: 6548485573,
      120: 6548485637,
      144: 6548485701
    },
    40: {
      60: 6548485765,
      72: 6548485829,
      84: 6548485893,
      96: 6548485957,
      120: 6548486021,
      144: 6548486085
    },
    52: {
      60: 6548486149,
      72: 6548486213,
      84: 6548486277,
      96: 6548486341,
      120: 6548486405,
      144: 6548486469
    },
    64: {
      60: 6548486533,
      72: 6548486597,
      84: 6548486661,
      96: 6548486725,
      120: 6548486789,
      144: 6548486853
    },
    78: {
      60: 6548486917,
      72: 6548486981,
      84: 6548487045,
      96: 6548487109,
      120: 6548487173,
      144: 6548487237
    },
    90: {
      60: 6548487301,
      72: 6548487365,
      84: 6548487429,
      96: 6548487493,
      120: 6548487557,
      144: 6548487621
    },
    112: {
      60: 6548487685,
      72: 6548487749,
      84: 6548487813,
      96: 6548487877,
      120: 6548487941,
      144: 6548488005
    },
    135: {
      60: 6548488069,
      72: 6548488133,
      84: 6548488197,
      96: 6548488261,
      120: 6548488389,
      144: 6548488453
    },
    157: {
      60: 6548488517,
      72: 6548488581,
      84: 6548488645,
      96: 6548488709,
      120: 6548488773,
      144: 6548488837
    },
    180: {
      60: 6548488901,
      72: 6548488965,
      84: 6548489029,
      96: 6548489093,
      120: 6548489157,
      144: 6548489221
    }
  },
  coral: {
    28: {
      60: 6548030149,
      72: 6548030213,
      84: 6548030277,
      96: 6548030341,
      120: 6548030405,
      144: 6548030469
    },
    40: {
      60: 6548030533,
      72: 6548030597,
      84: 6548030661,
      96: 6548030725,
      120: 6548030789,
      144: 6548030853
    },
    52: {
      60: 6548030917,
      72: 6548030981,
      84: 6548031045,
      96: 6548031109,
      120: 6548031173,
      144: 6548031237
    },
    64: {
      60: 6548031301,
      72: 6548031365,
      84: 6548031429,
      96: 6548031493,
      120: 6548031621,
      144: 6548031685
    },
    78: {
      60: 6548031749,
      72: 6548031813,
      84: 6548031877,
      96: 6548032005,
      120: 6548032069,
      144: 6548032133
    },
    90: {
      60: 6548032197,
      72: 6548032261,
      84: 6548032389,
      96: 6548032453,
      120: 6548032517,
      144: 6548032581
    },
    112: {
      60: 6548032645,
      72: 6548032773,
      84: 6548032837,
      96: 6548032901,
      120: 6548032965,
      144: 6548033029
    },
    135: {
      60: 6548033093,
      72: 6548033221,
      84: 6548033285,
      96: 6548033349,
      120: 6548033413,
      144: 6548033477
    },
    157: {
      60: 6548033605,
      72: 6548033669,
      84: 6548033733,
      96: 6548033797,
      120: 6548033861,
      144: 6548033925
    },
    180: {
      60: 6548033989,
      72: 6548034053,
      84: 6548034117,
      96: 6548034181,
      120: 6548034245,
      144: 6548034309
    }
  },
  tradewinds: {
    28: {
      60: 6547600389,
      72: 6547600453,
      84: 6547600517,
      96: 6547600581,
      120: 6547600645,
      144: 6547600709
    },
    40: {
      60: 6547600773,
      72: 6547600837,
      84: 6547600901,
      96: 6547600965,
      120: 6547601029,
      144: 6547601093
    },
    52: {
      60: 6547601157,
      72: 6547601221,
      84: 6547601285,
      96: 6547601349,
      120: 6547601413,
      144: 6547601477
    },
    64: {
      60: 6547601541,
      72: 6547601605,
      84: 6547601669,
      96: 6547601733,
      120: 6547601797,
      144: 6547601861
    },
    78: {
      60: 6547601925,
      72: 6547601989,
      84: 6547602053,
      96: 6547602117,
      120: 6547602181,
      144: 6547602245
    },
    90: {
      60: 6547602309,
      72: 6547602373,
      84: 6547602437,
      96: 6547602501,
      120: 6547602565,
      144: 6547602629
    },
    112: {
      60: 6547602693,
      72: 6547602757,
      84: 6547602821,
      96: 6547602885,
      120: 6547602949,
      144: 6547603013
    },
    135: {
      60: 6547603077,
      72: 6547603141,
      84: 6547603205,
      96: 6547603269,
      120: 6547603333,
      144: 6547603397
    },
    157: {
      60: 6547603461,
      72: 6547603525,
      84: 6547603589,
      96: 6547603653,
      120: 6547603717,
      144: 6547603781
    },
    180: {
      60: 6547603845,
      72: 6547603909,
      84: 6547603973,
      96: 6547604037,
      120: 6547604101,
      144: 6547604165
    }
  },
  roclon: {
    28: {
      60: 6549550277,
      72: 6549550341,
      84: 6549550469,
      96: 6549550533,
      120: 6549550597,
      144: 6549550661
    },
    40: {
      60: 6549550725,
      72: 6549550789,
      84: 6549550853,
      96: 6549550917,
      120: 6549550981,
      144: 6549551045
    },
    52: {
      60: 6549551109,
      72: 6549551173,
      84: 6549551237,
      96: 6549551301,
      120: 6549551365,
      144: 6549551429
    },
    64: {
      60: 6549551557,
      72: 6549551621,
      84: 6549551685,
      96: 6549551749,
      120: 6549551813,
      144: 6549551877
    },
    78: {
      60: 6549551941,
      72: 6549552005,
      84: 6549552069,
      96: 6549552133,
      120: 6549552197,
      144: 6549552261
    },
    90: {
      60: 6549552325,
      72: 6549552389,
      84: 6549552453,
      96: 6549552517,
      120: 6549552581,
      144: 6549552709
    },
    112: {
      60: 6549552773,
      72: 6549552837,
      84: 6549552901,
      96: 6549552965,
      120: 6549553029,
      144: 6549553093
    },
    135: {
      60: 6549553157,
      72: 6549553221,
      84: 6549553285,
      96: 6549553349,
      120: 6549553413,
      144: 6549553477
    },
    157: {
      60: 6549553541,
      72: 6549553669,
      84: 6549553733,
      96: 6549553797,
      120: 6549553861,
      144: 6549553925
    },
    180: {
      60: 6549553989,
      72: 6549554053,
      84: 6549554117,
      96: 6549554181,
      120: 6549554245,
      144: 6549554309
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