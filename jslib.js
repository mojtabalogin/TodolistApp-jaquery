// to do list project
$(document).ready(function(){
    

    //to do list 

    //  make flag 
    let inputValue= 'default';
    let testValue= '';
    let newClass = 'newClass';
    let count= 0 ;
    let contetnDataType = 0;
    // end make flag

    // create template of content
        let contentElement ='';
    // end create template of content

    //  give value of input when clicled
        $('.input').keypress(function(event){
            let keycode = (event.keyCode ? event.keyCode : event.which);
                    if(keycode == '13'){
                        count = count +1 ;
                        contetnDataType = contetnDataType + 1 ;
                        newClass = 'newContent' + count.toString() ;
                        contentElement ='<div class="task" data-type="'+ contetnDataType.toString() + '" ><p class="content ' + newClass + '"></p><li> <span class="okEvent" data-type="'+ contetnDataType.toString() + '" >Ok</span> <span class="trashEvent" data-type="'+ contetnDataType.toString() + '" >Trash</span>  </li></div>';
                        inputValue = $('.input').val();

                        // add one template of content to dom       
                            $('.container').append(contentElement);
                        // end add one template of content to dom

                        $('.' + newClass).append(inputValue);

                        // create event for  ok and trash
                            $('.okEvent').click(function(event){
                                testValue = $(this).attr('data-type');

                                //ok is clicked 
                                
                                    $('.task[data-type="'+ testValue +'"] > p').css({
                                        'textDecoration':'line-through',
                                    });

                                    $('.task[data-type="'+ testValue +'"]').css({
                                        'background-color': 'lightgray'
                                    });

                                //end ok is clicked


                            });
                    
                            $('.trashEvent').click(function(event){
                                testValue = $(this).attr('data-type');
                                $('.task[data-type="'+ testValue +'"]').css({
                                    'display':'none'
                                });
                            });
                        // end create event for  ok and trash
                    }
        });
    // end give value of input whent clicked

    //end to do list


    //end document
})
// end to list jquery project