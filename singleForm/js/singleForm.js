var lang = "";
// var uploadStaus = false;
$(function(){
    lang = $("body").hasClass("en") ? true : false;

    //new getquote
    //menu dropdown
    $(".logistics_nav .nav_right ul li.typeSelect").hover(function(){
        $(this).find("dl").show();
    },function(){
        $(this).find("dl").hide();
    });

    
    /***Transport Mode Check***/
    $('.new_trans_icons .trans_sort').on('click', function(e){
        var elementHasClass = $(this).hasClass("trans_check");
        if(elementHasClass) {
            $(this).removeClass("trans_check");
        } else{
            $(this).addClass("trans_check");
        }
        var translistVal = $("#new_TransIcon .trans_check");
        if(translistVal.length > 0 ){
            $('.newwarningTrans').css('display','none');
        }
        else{
            $('.newwarningTrans').css('display','inline-block');
        }
        var newArrar = [];
        $(translistVal).each(function(index,item) {
            newArrar.push($(this).attr('data-value'));
            $("#new_TransIcon").attr('data-value', newArrar.toString())
        });

    });
    var translistVal = $("#new_TransIcon .trans_check");
    var newArrar = [];
    $(translistVal).each(function(index,item) {
        newArrar.push($(this).attr('data-value'));
        $("#new_TransIcon").attr('data-value', newArrar.toString())
    });


    //upload validation
    // if(lang){
    //     picWindowNewUpload("file_upload", "uploadFa1", "fileType", '', false, false, true, '10MB', true, 0,3);
    //     //picWindowNewUpload("file_uploadMobile", "uploadFa2", "fileType2", '', false, false, true, '10MB', true, 0,3);
    // }else{
    //     picWindowNewUpload("file_upload", "uploadFa1", "fileType", '', false, false, false, '10MB', true, 0,3);
    //     //picWindowNewUpload("file_uploadMobile", "uploadFa2", "fileType2", '', false, false, false, '10MB', true, 0,3);
    // }

    //allow numbers
    var ele = $('.inputNumber')[0];
    ele.onkeypress = function(e) {
        if(isNaN(this.value+""+String.fromCharCode(e.charCode)))
            return false;
    }
    ele.onpaste = function(e){
        e.preventDefault();
    }

    var ele1 = $('.inputNumber1')[0];
    ele1.onkeypress = function(e) {
        if(isNaN(this.value+""+String.fromCharCode(e.charCode)))
            return false;
    }
    ele1.onpaste = function(e){
        e.preventDefault();
    }

    var ele2 = $('.inputNumber2')[0];
    ele2.onkeypress = function(e) {
        if(isNaN(this.value+""+String.fromCharCode(e.charCode)))
            return false;
    }
    ele2.onpaste = function(e){
        e.preventDefault();
    }

    var ele3 = $('.inputNumber3')[0];
    ele3.onkeypress = function(e) {
        if(isNaN(this.value+""+String.fromCharCode(e.charCode)))
            return false;
    }
    ele3.onpaste = function(e){
        e.preventDefault();
    }

    //decimal validation
    $(".new_CargoMode").on('keypress', "input.inputDim", function(){
        var $this = $(this);
        if ((event.which != 46 || $this.val().indexOf('.') != -1) &&
        ((event.which < 48 || event.which > 57) &&
        (event.which != 0 && event.which != 8))) {
            event.preventDefault();
        }
    
        var text = $(this).val();
        if ((event.which == 46) && (text.indexOf('.') == -1)) {
            setTimeout(function() {
                if ($this.val().substring($this.val().indexOf('.')).length > 3) {
                    $this.val($this.val().substring(0, $this.val().indexOf('.') + 3));
                }
            }, 1);
        }
    
        if ((text.indexOf('.') != -1) &&
            (text.substring(text.indexOf('.')).length > 2) &&
            (event.which != 0 && event.which != 8) &&
            ($(this)[0].selectionStart >= text.length - 2)) {
            event.preventDefault();
        }
    });

    $(".new_CargoMode").bind('paste', "input.inputDim", function(){
        var text = e.originalEvent.clipboardData.getData('Text');
        if ($.isNumeric(text)) {
            if ((text.substring(text.indexOf('.')).length > 3) && (text.indexOf('.') > -1)) {
                e.preventDefault();
                $(this).val(text.substring(0, text.indexOf('.') + 3));
            }
        }else{
            e.preventDefault();
        }
    });

    // /^\d+(\.\d{1,2})?$/
    // /^[0]{1}[.]{1}[0-9]{1,2}$/
    // var zeroPatrren = /^[1-9][0-9]+$/;
    // $(".new_CargoMode").on('keypress', "input.inputDim", function(){
    //     if($("input.inputDim").val() == zeroPatrren){
    //         alert(1213)
    //     }
    // })

    // textarea message count
    var maxLength = 1000;
    $('textarea#new_adRemarks').keyup(function() {
        var length = $(this).val().length;
        var length = maxLength-length;
        $('#new_chars2').text(length);
    });

    var maxLength2 = 1000;
    $('textarea#new_prod_dis').keyup(function() {
        var length = $(this).val().length;
        var length = maxLength2-length;
        $('#new_chars3').text(length);
    });
    
    $('#newadds').on('click',add);
    $('#newsubs').on('click',sub);
    
    $('#adds').on('click',add);
    $('#subs').on('click',sub);

    $("input.inputValideCSS, textarea.inputValideCSS").on('keypress', function(e){
        $(this).css({'border': '1px solid #2296F3', 'background-color': '#ffffff'});
    });

    $("#notSubmit").on('click', function(){
        $("#new_ConfirmPopUp").removeClass('disPlay_Flex');
    });

    $("#yesSubmit").on('click', function(){
        $("#new_ConfirmPopUp").removeClass('disPlay_Flex');
    });

    $("#newclosePng").on('click', function(){
        $("#new_ConfirmPopUp").removeClass('disPlay_Flex');
    });

    $("input.inputValideCSS, textarea.inputValideCSS").on('input propertychange', function(e){
        $(this).css({'border': '1px solid #2296F3', 'background-color': '#ffffff'});
    });

    $("#new_getQuoteSend").on('click', function(){
        let state = false;



        



        var inputs = $(".new_js_val .inputValideCSS");
        for(var i=0;i<inputs.length;i++) {
            if(inputs[i].value == "") {
                $(inputs[i]).css({'border': '1px solid red'});
                $('.warning').eq().css('diplay', 'block')
                state = false
            }
            else{
                state = true
            }
        }
        
        for(var i=0;i<inputs.length;i++) {
            if($.trim(inputs[i].value) == "") {
                $(inputs[i]).css({'border': '1px solid red'});
                state = false
                return false
            }
        }

        var email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(!email.test($(".emailRequired3").val())){
            $(".emailRequired3").focus().css({'border': '1px solid red'});;
            $(".formatWrong").css('display', 'block');
            return false;
            state = false
        }

        var translistCheckVal = $("#new_TransIcon .trans_check");
        if(translistCheckVal.length == 0){
            $('.newwarningTrans').css('display','inline-block');
            return false;
            state = false
        }else{
            state = true
        }

        if($(".textInfo .messageRequired").val().length >= 1000) {
            var txt = lang ? "Messages should not more than 1000 words" : "留言最多不能超过1000字";
            poputMessage({"type":"warning","message": txt,"time":3000});
            return false;
            state = false
        }
        else{
            state = true
        }

        if($(".new_textPoduct .messageRequired").val().length >= 1000) {
            var txt = lang ? "Messages should not more than 1000 words" : "留言最多不能超过1000字";
            poputMessage({"type":"warning","message": txt,"time":3000});
            return false;
            state = false
        }
        else{
            state = true
        }

        var pattren = /^[0]{1}[.]{1}[0-9]{1,2}$/;
        // /^[0]{1}[.]{1}[0-9]{1,2}$/    /^\d+(\.\d{1,2})?$/
        var pattrenTwo = /^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/;
        var inputfieldText = $(".new_weight_row input.inputDim");
        var inputFormat = $(inputfieldText).val();
        
        if(inputFormat == "0" || inputFormat == "0." || inputFormat == "0.0" || inputFormat == "0.00"){
            $(inputfieldText).css({'border': '1px solid red'});
            return false;
        }else if(inputFormat != ""){
            var newIndex = inputFormat.toString().indexOf("0");
            if(newIndex == 0){/*0开头的数字串*/
                if(!pattren.test($(inputfieldText).val())){
                    var txt = lang ? "Format exp: 1.0, 111.00" : "格式范例: 1.0, 111.00";
                    poputMessage({"type":"warning","message": txt,"time":3000});
                    return false;
                }
            }else{/*非0开头的数字*/
                if(!pattrenTwo.test($(inputfieldText).val())){
                    var txt = lang ? "Format exp: 1.0, 111.00" : "格式范例: 1.0, 111.00";
                    poputMessage({"type":"warning","message": txt,"time":3000});
                    return false;
                }
            }
        }


        /*var inputfieldTextDim = $(".new_dimension_row input.inputDim");
        var inputfieldTextDimFormat = $(inputfieldTextDim).val();
        for(var i=0; i<inputfieldTextDimFormat.length; i++){
            if(inputfieldTextDimFormat[i] == "0" || inputfieldTextDimFormat[i] == "0." || inputfieldTextDimFormat[i] == "0.0" || inputfieldTextDimFormat[i] == "0.00"){
                $(inputfieldTextDim).css({'border': '1px solid red'});
                return false;
            }else if(inputfieldTextDimFormat[i] != ""){
                var newIndex = inputfieldTextDimFormat[i].toString().indexOf("0");
                if(newIndex == 0){
                    console.log("0000");
                    if(!pattren.test($(inputfieldTextDim).val())){
                        var txt = lang ? "Format exp: 1.0, 111.00" : "格式范例: 1.0, 111.00";
                        poputMessage({"type":"warning","message": txt,"time":3000});
                        return false;
                    }else{

                    }
                }else{
                    console.log("1111");
                    if(!pattrenTwo.test($(inputfieldTextDim).val())){
                        var txt = lang ? "Format exp: 1.0, 111.00" : "格式范例: 1.0, 111.00";
                        poputMessage({"type":"warning","message": txt,"time":3000});
                        return false;
                    }
                }
            }
        }*/

        var inputfieldTextDim = $(".new_dimension_row input.inputDim");
        for(var i=0;i<inputfieldTextDim.length;i++) {
            if($(inputfieldTextDim[i]).value == ""){
                state = true
            }
            if($(inputfieldTextDim[i]).val()){
                if($(inputfieldTextDim[i]).value <= 0){
                    state = false
                }
                if($(inputfieldTextDim[i]).val() == 0){
                    $(inputfieldTextDim[i]).css({'border': '1px solid red'});
                    return false;
                    state = false
                }
                // else if(!pattren.test($(inputfieldTextDim[i]).val())){
                //     var txt = lang ? "Format exp: 1.0, 111.00" : "格式范例: 1.0, 111.00";
                //     poputMessage({"type":"warning","message": txt,"time":3000});
                //     state = false
                // }
            } 
        }

        $("#new_getQuoteSend").attr('data-state', state);
        if(state){
            $("#new_ConfirmPopUp").addClass('disPlay_Flex');
        }
    });

    $("#closeToTransferList").on('click', function(){
        location.href = "/logistics/rfq/list?email="+$("#new_adEmail").val();
    });
 
});

//new_getQuote Form Confirm
function newSubmitConfirmRequest(){
    var listRfqPack = [];
    $(".new_CargoMode").each( function(){
        var that = $(this);
        console.log(that);
        var newArr = {};
        newArr.grossWeight = that.find(".input_weight").val(),
        newArr.leng = that.find(".input_L").val(),
        newArr.wide = that.find(".input_W").val(),
        newArr.high = that.find(".input_H").val(),
        console.log(newArr);
        listRfqPack.push(newArr);
    });

    var shipping = {}; //new Arrar()
    $('.new_shippers_Infor').each(function(){
        shipping.country = $.trim($("#new_spCountry").val());
        shipping.city = $.trim($("#new_spCity").val());
    })

    var consignee = {}; //new Arrar()
    $('.new_consignee_Infor').each(function(){
        consignee.country = $.trim($("#new_csCountry").val());
        consignee.city = $.trim($("#new_csCity").val());
    })
    var listFile = new Array()
    if($("#fileType div.addPic").length > 0){
        for(var i=0; i<$("#fileType div.addPic").length; i++){
            listFile[i] = $("#fileType div").eq(i).attr("data-url");
        }
    }

    var data={
        transportMode:$("#new_TransIcon").attr('data-value'),
        description:$.trim($("#new_prod_dis").val()),
        listRfqPack:listRfqPack,
        shipping:shipping,
        consignee:consignee,
        listFile:listFile,
        email: $.trim($("#new_adEmail").val()),
        message: $.trim($("#new_adRemarks").val()),
        language:lang ? 'en':'cn',
        source:1,
    }

    $("#yesSubmit").removeAttr('onclick');
    var url="/logistics/rfq/save";
    $.ajax({
        type: "POST",
        async: true,
        url: url,
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            console.log(data);
            if(data.code == '200') {
                $("#confirmPopup").css("display","flex");
                var newadEmail = document.getElementById("new_adEmail").value;
                document.getElementById('new_adEmail_Dis2').innerHTML = newadEmail;
            }
        },
        error: function (XHR, textStatus, errorThrown) {
            common.imgHide();
            $("#yesSubmit").attr("onclick","submitConfirmRequistion();");
            alert(msgError.error00050);
        }
    });
}





























/********* Mobile Edition JS *********/
$(function(){
    lang = $("body").hasClass("en") ? true : false;

    var getQuote = $(".mb_sendQuote_form");
    var location = $(".mb_locationEditing");
    var goods = $(".mb_goodsEditing");
    var locationPop = $(".mb_locationEditPop");
    var goodsPop = $(".mb_goodsEditPop");

    $('.enter_location').on('click',function(){
        getQuote.removeClass('disBlock');
        location.addClass('disBlock');
        // getQuote.hide();
        // location.show();
    });
    $('#info_backOne').on('click', function(){
        locationPop.addClass('disBlock');
    });
    $('#stayInLocation').on('click', function(){
        locationPop.removeClass('disBlock');
    });
    $('#exitLocation').on('click', function(){
        locationPop.removeClass('disBlock');
        // getQuote.show();
        // location.hide();
        getQuote.addClass('disBlock');
        location.removeClass('disBlock');
    });


    $(".enterGoods").on('click', function(){
        getQuote.removeClass('disBlock');
        goods.addClass('disBlock');
        // getQuote.hide();
        // goods.show();

        // if(!uploadStaus){
        //     uploadStaus = true;
        //     lang ? picWindowNewUpload("file_uploadMobile", "uploadFa2", "fileType2", '', false, false, true, '10MB', true, 0,3) : picWindowNewUpload("file_uploadMobile", "uploadFa2", "fileType2", '', false, false, false, '10MB', true, 0,3);
        // }
        
    });
    $('#info_backTwo').on('click', function(){
        goodsPop.addClass('disBlock');
    });
    $('#stayInGoods').on('click', function(){
        goodsPop.removeClass('disBlock');
    });
    $('#exitGoods').on('click', function(){
        goodsPop.removeClass('disBlock');
        getQuote.addClass('disBlock');
        goods.removeClass('disBlock');
        // getQuote.show();
        // goods.hide();
    });


    $(".body input.inputValide, .body textarea.inputBorderVal").on('keypress', function(e){
        $(this).css({'border': '0px', 'background-color': '#ecf1f5'});
    });

    $("input.inputValide").on('input propertychange', function(e){
        $(this).css({'border': '0px', 'background-color': '#ecf1f5'});
    });

    $("#mb_inputWeight").on('input propertychange', function(e){
        $(this).val($(this).val().replace(/[^0-9.]/g, ''));
    });


    $('.mb_trans_icons .trans_sort').on('click', function(e){
        var elementHasClass = $(this).hasClass("trans_check");
        if(elementHasClass) {
            $(this).removeClass("trans_check");
        } else{
            $(this).addClass("trans_check");
        }


        var translistVal = $("#mb_TransIcon .trans_check");

        if(translistVal.length > 0 ){
            $('.warningTrans').css('display','none');
        }
        else{
            $('.warningTrans').css('display','inline-block');
        }

        var newArrar = [];
        $(translistVal).each(function(index,item) {
            newArrar.push($(this).attr('data-value'));
            $("#mb_TransIcon").attr('data-value', newArrar.toString())
        });

    });

    var translistVal = $("#mb_TransIcon .trans_check");
    var newArrar = [];
    $(translistVal).each(function(index,item) {
        newArrar.push($(this).attr('data-value'));
        $("#mb_TransIcon").attr('data-value', newArrar.toString())
    });

    //decimal validation
    $(".mb_goods_infoDiv").on('keypress', "input.inputDim", function(){
        var $this = $(this);
        if ((event.which != 46 || $this.val().indexOf('.') != -1) &&
        ((event.which < 48 || event.which > 57) &&
        (event.which != 0 && event.which != 8))) {
            event.preventDefault();
        }
    
        var text = $(this).val();
        if ((event.which == 46) && (text.indexOf('.') == -1)) {
            setTimeout(function() {
                if ($this.val().substring($this.val().indexOf('.')).length > 3) {
                    $this.val($this.val().substring(0, $this.val().indexOf('.') + 3));
                }
            }, 1);
        }
    
        if ((text.indexOf('.') != -1) &&
            (text.substring(text.indexOf('.')).length > 2) &&
            (event.which != 0 && event.which != 8) &&
            ($(this)[0].selectionStart >= text.length - 2)) {
            event.preventDefault();
        }
    });

    $(".mb_goods_infoDiv").bind('paste', "input.inputDim", function(){
        var text = e.originalEvent.clipboardData.getData('Text');
        if ($.isNumeric(text)) {
            if ((text.substring(text.indexOf('.')).length > 3) && (text.indexOf('.') > -1)) {
                e.preventDefault();
                $(this).val(text.substring(0, text.indexOf('.') + 3));
            }
        }else{
            e.preventDefault();
        }
    });

    $('#close_mb_pop').on('click', function(){
        $('#logistics_dialogue_box').hide();
    });

    //warning mailbox none
    $('.logistics_dialogue_body').on('keypress', "input.mb_form_input", function(){
        $('.warningMailbox').css('display', 'none');
    });

    $("input.inputDim").on('change', function(){
        $(this).val($(this).val().replace(/[^0-9.]/g, ''));
    });

    $('#mb_btn_saveOne').on('click', function(){
        let state = false
        var inputs = $(".mb_js_val .inputValide");
        for(var i=0;i<inputs.length;i++) {
            if($.trim(inputs[i].value) == "") {
                $(inputs[i]).css({'border': '1px solid red'});
                state = false
            }
            else{
                state = true
            }
        }


        var inputsTrim = $(".mb_loc_info input");
        for(var i=0;i<inputsTrim.length;i++) {
            if(inputsTrim[i].value.trim() == "") {
                return false,
                state = false;
                break;
            }else{
                state = true
            }
        }        
        
        $("#mb_btn_saveOne").attr('data-state', state);
        if(state) {
            // getQuote.show();
            // location.hide();
            getQuote.addClass('disBlock');
            location.removeClass('disBlock');

            $('#sp_disNone').hide();
            $('#sp_disOn').show();

            $('#cs_disNone').hide();
            $('#cs_disOn').show();
            var spCountry = document.getElementById("mb_spCountry").value;
            var spCity = document.getElementById("mb_spCity").value;
            var csCountry = document.getElementById("mb_csCountry").value;
            var csCity = document.getElementById("mb_csCity").value;
            document.getElementById('info_sp_Co_dis').innerHTML = spCountry;
            document.getElementById('info_cs_Co_dis').innerHTML = csCountry;
            document.getElementById('info_sp_Ci_dis').innerHTML = spCity;
            document.getElementById('info_cs_Ci_dis').innerHTML = csCity;
        }
    });


    $('#mb_btn_saveTwo').on('click', function(){
        let state = false
        var inputs = $(".mb_js_val2 .inputValide");
        for(var i=0;i<inputs.length;i++) {
            if(inputs[i].value == 0) {
                $(inputs[i]).css({'border': '1px solid red'});
                return false;
                state = false
            }
            else{
                state = true
            }
        }

        var pattren = /^\d+(\.\d{1,2})?$/;
        var inputfieldText = $(".mb_weightTop input.inputNumber");
        if(!pattren.test($(inputfieldText).val())){
            var txt = lang ? "Format exp: 1.0, 111.00" : "格式范例: 1.0, 111.00";
            poputMessage({"type":"warning","message": txt,"time":3000});
            $(".btn_saveTwo").addClass("eventsno");
            setTimeout(function(){
                $(".btn_saveTwo").removeClass("eventsno");
            },3000);
            return false;
            state = false
        }

        var inputfieldTextDim = $(".mb_dimension input.inputDim");
        for(var i=0;i<inputfieldTextDim.length;i++) {
            if($(inputfieldTextDim[i]).value == ""){
                state = true
            }
            if($(inputfieldTextDim[i]).val()){
               if(!pattren.test($(inputfieldTextDim[i]).val())){
                    var txt = lang ? "Format exp: 1.0, 111.00" : "格式范例: 1.0, 111.00";
                    poputMessage({"type":"warning","message": txt,"time":3000});
                    $(".btn_saveTwo").addClass("eventsno");
                    setTimeout(function(){
                        $(".btn_saveTwo").removeClass("eventsno");
                    },3000);
                    return false;
                    state = false
                } 
            } 
        }
        
        if($(".mb_product_dis .product_dis").val().length >= 1000) {
            var txt = lang ? "Messages should not more than 1000 words" : "留言最多不能超过1000字";
            poputMessage({"type":"warning","message": txt,"time":3000});
            return false;
            state = false
        }
        else{
            state = true
        }

        for(var i=0;i<inputs.length;i++) {
            if(inputs[i].value == "") {
                return false;
                state = false
            }
            else{
                state = true
            }
        }
        $("#mb_btn_saveTwo").attr('data-state', state);
        if(state) {
            // getQuote.show();
            // goods.hide();
            getQuote.addClass('disBlock');
            goods.removeClass('disBlock');

            $('#enter_goods').hide();
            $('#goods_dis').show();
            var goodsValue = document.getElementById("mb_inputWeight").value;
            document.getElementById('goods_dis_show').innerHTML = goodsValue;
        }
    });
    
    $('#mb_btn_Get').on('click', function(){
        let state = false
        var inputs = $(".mb_js_val .inputValide");
        for(var i=0;i<inputs.length;i++) {
            if(inputs[i].value == "") {
                var txt = lang ? "Please complete all required fields！" : "请完善所有必填项！";
            poputMessage({"type":"news","message": txt,"time":3000});
            $(".btn_get").addClass("eventsno");
            setTimeout(function(){
                $(".btn_get").removeClass("eventsno");
            },3000);
                return false;
            }
            else{
                state = true;
            }
        }
        
        var inputs2 = $(".mb_js_val2 .inputValide");
        for(var i=0;i<inputs2.length;i++) {
            if(inputs2[i].value == 0) {
                var txt = lang ? "Please complete all required fields！" : "请完善所有必填项！";
            poputMessage({"type":"news","message": txt,"time":3000});
            $(".btn_get").addClass("eventsno");
            setTimeout(function(){
                $(".btn_get").removeClass("eventsno");
            },3000);
                return false;
            }
            else{
                state = true;
            }
        }

        for(var i=0;i<inputs2.length;i++) {
            if(inputs[i].value == "") {
                var txt = lang ? "Please complete all required fields！" : "请完善所有必填项！";
            poputMessage({"type":"news","message": txt,"time":3000});
            $(".btn_get").addClass("eventsno");
            setTimeout(function(){
                $(".btn_get").removeClass("eventsno");
            },3000);
                return false
            }
            else{
                state = true
            }
        }

        var translistVal = $("#mb_TransIcon .trans_check");
        if(translistVal.length == 0){
            $('.warningTrans').css('display','inline-block');
            var txt = lang ? "Please complete all required fields！" : "请完善所有必填项！";
            poputMessage({"type":"news","message": txt,"time":3000});
            $(".btn_get").addClass("eventsno");
            setTimeout(function(){
                $(".btn_get").removeClass("eventsno");
            },3000);
            return false
        }else{
            state = true
        }
        

        $("#mb_btn_Get").attr('data-state', state);
        if(state){
            $('#logistics_dialogue_box').show();
        }else{
            $('#logistics_dialogue_box').hide();
        }
    });

});




/***** click to add value *****/
function add(){
    var input = $('.inputWeight_dis'),
    value = input.val();
    input.val(++value);
    if(value > 0){
        $('.inputWeight_dis').css('border', '1px solid #2296F3')
        $('#subs').removeAttr('onclick');
        $('#newsubs').removeAttr('onclick');
    }
}
function sub(){
    var input = $('.inputWeight_dis'),
    value = input.val();
    if(value > 0){
        input.val(--value);
    }else{
        input.val(0);
    }
}

/****** Send the Data to the API ******/
function submitMobileConfirmRequistion(){
    var listRfqPack = [];
    $(".mb_goods_infoDiv").each( function(){
        var that = $(this);
        console.log(that);
        var newArr = {};
        newArr.grossWeight = that.find(".input_weight").val(),
        newArr.leng = that.find(".input_L").val(),
        newArr.wide = that.find(".input_W").val(),
        newArr.high = that.find(".input_H").val(),
        console.log(newArr);
        listRfqPack.push(newArr);
    });

    var email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!email.test($(".mb_emailReq").val())){
        $('.warningMailbox').css('display','inline-block');
        return false
    }

    if($("textarea.mb_textArea_info").val().length >= 1000) {
        var txt = lang ? "Messages should not more than 1000 words" : "留言最多不能超过1000字";
        poputMessage({"type":"warning","message": txt,"time":3000});
        return false;
    }

    var shippingMobile = {}; //new Arrar()
    $('.mb_spInfo').each(function(){
        shippingMobile.country = $.trim($("#mb_spCountry").val());
        shippingMobile.city = $.trim($("#mb_spCity").val());
    })

    var consigneeMobile = {}; //new Arrar()
    $('.mb_csInfo').each(function(){
        consigneeMobile.country = $.trim($("#mb_csCountry").val());
        consigneeMobile.city = $.trim($("#mb_csCity").val());
    })
    var listFile = new Array()
    if($("#fileType2 div.addPic").length > 0){
        for(var i=0; i<$("#fileType2 div.addPic").length; i++){
            listFile[i] = $("#fileType2 div").eq(i).attr("data-url");
        }
    }
    var data={
        transportMode:$("#mb_TransIcon").attr('data-value'),
        description: $.trim($("#prod_dis").val()),
        listRfqPack:listRfqPack,
        shipping:shippingMobile,
        consignee:consigneeMobile,
        listFile:listFile,
        email: $.trim($("#mb_adEmail").val()),
        message: $.trim($("#mb_adRemarks").val()),
        language:lang ? 'en':'cn',
        source:2,
    }

    $("#mb_btn_Send").removeAttr('onclick');
    var url="/logistics/rfq/save";
    $.ajax({
        type: "POST",
        async: true,
        url: url,
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            console.log(data);
            if(data.code == '200') {
                // console.log(12231)
                $("#mb_logistics_success").show();
                $(".mb_sendQuote_form").hide();
                $(".mb_locationEditing ").hide();
                $(".mb_goodsEditing").hide();
                $('#logistics_dialogue_box').hide();
                var mbadEmail = document.getElementById("mb_adEmail").value;
                document.getElementById('mb_adEmail_Dis2').innerHTML = mbadEmail;
            }
        },
        error: function (XHR, textStatus, errorThrown) {
            common.imgHide();
            $("#mb_btn_Send").attr("onclick","submitMobileConfirmRequistion();");
            alert(msgError.error00050);
        }
    });
}



//upload images
// function callbackOperationElement(res,sourceLink,imageSrc,file_upload){
//     var txt = lang ? "Delete" : "删除";
//     var html ="";
//     var html2 = "";
//     html += '<div class="addPic newThumbnail" style="float:none; width:100%; height:auto" data-url="'+ imageSrc +'" data-picname="'+ res.fname +'"><a class="icon_view" href=" ' + sourceLink + ' " target="_blank"><img class="icon_add" src="/static/newimages/logistics_def/gray_icon.svg" /><p  class="file_name clear">'+ res.fname +'</p></a><p onclick="javascript:removeImg(event);" class="icon_del">' +  txt  + '</p></div>';

//     html2+='<div class="addPic newThumbnail" data-url="'+ imageSrc +'" data-picname="'+ res.fname +'"><img class="img_add" src="'+ imageSrc +'" /> <p class="removeImg" onclick="javascript:removeImg2(event);"> <img src="/static/newimages/logistics_mobile/remove.png" /></p> </div>';


//     if(file_upload == "file_upload") {  //when you frist upload delect 
//         $("#fileType").append(html); //desktop
//     }
//     if(file_upload == "file_uploadMobile"){
//         $("#fileType2").append(html2); //mobile
//     }

//     var li = $("#fileType div").length; //desktop
//     var li2 = $("#fileType2 div").length; //mobile
//     $('#fileCount').html('<i>' + li + '</i>'); //desktop
//     $('#fileCount2').html('<i>' + li2 + '</i>'); //mobile

//     if($("#fileType2 div").length == 3){
//         $('#uploadFa2').hide();
//     }else{
//         $('#uploadFa2').show();
//     }
// }
// function removeImg(event) {
//     $(event.target).parent().remove();
//     var li = $("#fileType div").length; //desktop
//     $('#fileCount').html('<b>' + li + '</b>'); //desktop
// }

// function removeImg2(event) {
//     $(event.target).parent().parent().remove();
//     var li2 = $("#fileType2 div").length; //mobile
//     $('#fileCount2').html('<b>' + li2 + '</b>'); //mobile
//     if($("#fileType2 div").length <= 3){
//         $('#uploadFa2').show();
//     }else{
//         $('#uploadFa2').hide();
//     }
// }
