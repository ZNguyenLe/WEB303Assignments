$(function() {
    searchName();
    button();
    makeRows();
    update();
});

let rows = [];
    $min = $('#value-min');
    $max = $('#value-max');
    $table = $('#rates');

function makeRows() {
    contentRows();
    cast.each(function(person) {
        let $row = $('<tr></tr>');
        $row.append($('<td></td>').text(person.name));
        $row.append($('<td></td>').text(person.episodes));
        rows.push({
            person: person,
            $element: $row
        });
    });
}

function update(min, max) {
    rows.forEach(function(row) {
        if (row.person.episodes >= min && row.person.episodes <= max) {
            row.$element.show();
        } else {
            row.$element.hide();
        }
    });
}

function contentRows(){
    $.getJSON("cast.json", function(results){
        $.each(results["cast"],function(i,field){
            $("#table").append("<tr><td><p>" + field['name'] + "</p></td><td><p>" + field['gender'] + "</p></td><td><p>" + field['episodes'] + "</p></td><td><p>" + field['birthday'] + "</p></td></tr>");
      
        });
    });
}

function searchName(){
    $('#search').keydown(function() {
        
        let $names = $('#name');
        let $search = $('#search');
        let cache = [];
        console.log($search.val());
        $names.each(function() {
            cache.push({
                element: this 
            });
        });  
    })
    filter();
    };

function filter() {
        $(document).ready(function(){
        $('#search').on('keyup', function() {
            
            let value = $(this).val().toLowerCase();
            $('#tbody tr').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > - 1);
                if(value != '') {
                    $(this).css({'background-color': 'yellow' , 'color': 'black', 'font-weight': 'bold'});
                } else {
                    $(this).css({'background-color': '', 'color': 'black', 'font-weight': ''});
                }
            });
            
        });
    });  
};

function button(){
    let Names = $('#tbody tr');
    let $buttons = $('#buttons');
    let tagged = {};

    Names.each(function() {
        let name = this;
        let tags = $(this).data('tags');
        if (tags) {
            tags.split(',').forEach(function(tagName) {
                if (tagged[tagName] == null) {
                    tagged[tagName] = [];
                }
                tagged[tagName].push(name);
            })
        }
    });
    $('#buttons').each(function() {
        $(this).on('click', function() {
            let filterTag = $(this).attr('class');
            $('tr').addClass('active');
            $('tr:not(.' + filterTag + ')').hide();
            //$search.val()
        })
    })
    $('<button/>', {
        text: 'A - M',
        class: 'active',
        click: function() {
            $(this).addClass('active').siblings().removeClass('active');
            console.log('clicked');
            Names.show();
        }
    }).appendTo($buttons);
    $('<button/>', {
        text: 'M - Z',
        class: 'active',
        click: function() {
            $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
            Names.show();
        }
    }).appendTo($buttons);
    $.each(tagged, function(tagName) {
        $('<button/>', {
            text: tagName + ' (' + tagged[tagName].length + ')',
            click: function() {
                $(this).addClass('active').siblings().removeClass('active');
                Names.hide().filter(tagged[tagName]).show();
            }
        }).appendTo($buttons);
    })
    console.log($buttons);
    
}

