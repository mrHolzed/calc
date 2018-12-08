$(document).ready(function(){
  $('.calculator__opener').click(function(){
    $('.calculator__wrapper').toggle();
  });

  function _(id){ return document.getElementById(id); }
    function submitForm(){
    	_("mybtn").disabled = true;
    	_("status").innerHTML = 'please wait ...';
    	var formdata = new FormData();
    	formdata.append( "n", _("n").value );
    	formdata.append( "e", _("e").value );
    	formdata.append( "m", _("m").value );
    	var ajax = new XMLHttpRequest();
    	ajax.open( "POST", "example_parser.php" );
    	ajax.onreadystatechange = function() {
    		if(ajax.readyState == 4 && ajax.status == 200) {
    			if(ajax.responseText == "success"){
    				_("my_form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
    			} else {
    				_("status").innerHTML = ajax.responseText;
    				_("mybtn").disabled = false;
    			}
    		}
    	}
    	ajax.send( formdata );
    }

  function myFunction() {
      var x = document.getElementById("tt").value;
      var s = document.getElementById("ss").value;
      var z = document.getElementById("zz").value;


      var procent = 0.1;

      var value;
      var itog;


      $(function(){
        console.log(s);
        value = ((x/10)+s)*z;
        itog = value+(value*procent);
        console.log(value);

        $("#sc").animateNumber({ number: itog }, 1500);
      });


      console.log(x);
      console.log(s);
  }


  photos = [
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Визитки', id:'vizitka'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга',},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Блокноты', id:'bloknoti'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
    {url:'img/bg.jpg', width:'150', height:'150', href:'#', text:'Услуга'},
  ];
  function bildergalerie() {
  	$('.products').empty().justifiedImages({
  		images : photos,
  		rowHeight: 200,
  		maxRowHeight: 400,
      template: function(data) {
          return '<a class="products__item" href=' + data.href + ' id=' + data.id + '  style="height:' + data.displayHeight + 'px;margin-right:' + data.marginRight + 'px;">' +
              '<div class="products__wrapper_overlay" style="height:' + data.displayHeight + 'px; width:' + data.displayWidth + 'px;"><h2 style="line-height:' + data.displayHeight + 'px;">  '+ data.text +' </h2></div>' + '<img class="image-thumb" src="' + data.src + '" style="width:' + data.displayWidth + 'px;height:' + data.displayHeight + 'px;" >' +
              '</a>';
      },
  		thumbnailPath: function(photo, width, height){
  			return photo.url;
  		},
  		getSize: function(photo){
  			return {width: photo.width, height: photo.height};
  		},
  		margin: 1
    	});
    }
  bildergalerie();
  //- $(window).resize(bildergalerie);



  var calculator =
    "<form>" +
      "<h2 class='animated fadeInDown'>{{title}}</h2>" +
      "<div class='animated fadeInDown mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
        "<select id='format' name='format' class='mdl-textfield__input'>" +
        "{{#each option_format}}<option value='{{value}}'>{{name}}</option>{{/each}}" +
        "</select>" +
        '<label class="mdl-textfield__label" for="format">Формат</label>' +
      "</div>" +
      "<div class='animated fadeInDown mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
        "<select id='tt' name='tt' class='mdl-textfield__input'>" +
        "{{#each option_pechat}}<option value='{{value}}'>{{name}}</option>{{/each}}" +
        "</select>" +
        '<label class="mdl-textfield__label" for="tt">Вид печати</label>' +
      "</div>" +
      "<div class='animated fadeInDown mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
        "<select id='ss' name='ss' class='mdl-textfield__input'>" +
        "{{#each option_cvet}}<option value='{{value}}'>{{name}}</option>{{/each}}" +
        "</select>" +
        '<label class="mdl-textfield__label" for="tt">Цветность</label>' +
      "</div>" +
      '<div class="animated fadeInDown mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
        '<input id="zz" class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4">' +
        '<label class="mdl-textfield__label" for="sample4">Количество</label>' +
        '<span class="mdl-textfield__error">Введите число!</span>' +
      '</div>' +
      "<div id='hh' class='animated fadeInDown'></div>" +
      "<p class='animated fadeInDown'>Итог: <span id='sc'>0</span> р</p>";
    "</form>";

  $('#bloknoti').click(function(){
    $(function(){
      componentHandler.upgradeElements($('.mdl-textfield').get());
    });
    var template = Handlebars.compile(calculator);

    var data = template({
      title: "Блокноты",
      option_format: [
        {name: ""},
        {name: "А3", value: "1"},
        {name: "А4", value: "1"},
      ],
      option_pechat: [
        {name: ""},
        {name: "Цифровая печать", value: "1"},
        {name: "Офсетная печать", value: "1"},
      ],
      option_cvet: [
        {name: ""},
        {name: "1+0", value: "1"},
        {name: "1+1", value: "1"},
      ],
    });

    $('.calculator').html(data);

    document.getElementById("tt").onchange = function() {myFunction()};
    document.getElementById("ss").onchange = function() {myFunction()};
    document.getElementById("zz").onchange = function() {myFunction()};


  });

  $('#vizitka').click(function(){

    var template = Handlebars.compile(calculator);

    var data = template({
      title: "Визитки",
      option_format: [
        {name: ""},
        {name: "А3", value: "1"},
        {name: "А4", value: "1"},
      ],
      option_pechat: [
        {name: ""},
        {name: "Цифровая печать", value: "1"},
        {name: "Офсетная печать", value: "1"},
      ],
      option_cvet: [
        {name: ""},
        {name: "1+0", value: "1"},
        {name: "1+1", value: "1"},
      ],
    });

    $('.calculator').html(data);

    document.getElementById("tt").onchange = function() {myFunction()};
    document.getElementById("ss").onchange = function() {myFunction()};
    document.getElementById("zz").onchange = function() {myFunction()};


  });



});
