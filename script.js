$(function() {
    contentRows();
    sort();
    searchName();
    button();
    update();
    
});

let rows = [];
    $min = $('#value-min');
    $max = $('#value-max');
    $table = $('#rates');
    cast = [];

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
        $.each(results["cast"],function(i, field){
             let $row = $('<tr><td><p>' + field['name'] + "</p></td><td><p>" + field['gender'] + "</p></td><td><p>" + field['episodes'] + "</p></td><td><p>" + field['birthday'] + '</p></td></tr>');
                cast.push({
                    person: field['name'],
                    $element: $row
                });
                $("#table").append($row);
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
        let tags = $(this).data('cast');
        if (tags) {
            tags.split(',').forEach(function(tagName) {
                if (tagged[tagName] == null) {
                    tagged[tagName] = [];
                }
                tagged[tagName].push(name);
            })
        }
    });
    $.each(tagged, function(tagName) {
        $('<button/>', {
            text: tagName + ' (' + tagged[tagName].length + ')',
            click: function() {
                $(this).addClass('active').siblings().removeClass('active');
                Names.hide().filter(tagged[tagName]).show();
            }
        }).appendTo($buttons);
    })
    $('<button/>', {
        text: 'A - M',
        click: function() {
            $(this).addClass('active').siblings().removeClass('active');
            console.log('clicked');
            $.each(cast, function(i, value) { 

                /* cast = [{
                    person: "Phoebe lastname",
                    $element: $row
                }]*/
                if(value.person.charAt(0) <= "M") {
                    value.$element.show();
                } else {
                    value.$element.hide();
                }
                console.log(cast);
            })
        }
    }).appendTo($buttons);
    $('<button/>', {
        text: 'N - Z',
        click: function() {
            $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');

            console.log('clicked');
            $.each(cast, function(i, value) {
                if(value.person.charAt(0) >= "N") {
                    value.$element.show();
                } else {
                    value.$element.hide();
                }
                console.log(cast);
            })
        }
    }).appendTo($buttons);
}

function sort() {
    $(function() {
        let compare = {
            name: function(a, b){
                a = a.replace('');
                b = b.replace('');
                if (a < b) {
                    return -1;
                } else {
                    return a > b ? 1 : 0;
                }
            },
            gender: function (a, b) {
                a = a.replace('');
                b = b.replace('');
                if (a < b) {
                    return -1;
                } else {
                    return a > b ? 1 : 0;
                }
            },
            episodes: function (a,b) {
               return a - b;
            },
            birthday: function(a, b) {
                a = new Date(a);
                b = new Date(b);

                return a - b;
            }
        }
        $('.sortable').each(function() {
            let $table = $(this);
            let $tbody = $table.find('tbody');
            let $controls = $table.find('th');
            let rows = $tbody.find('tr').toArray();

            $controls.on('click', function() {
                let $header = $(this);
                let order = $header.data('sort');
                let column;
                
                if ($header.is('.ascending') || $header.is('.descending')) {
                    $header.toggleClass('ascending descending');
                    $tbody.append(rows.reverse());
                } else {
                    $header.addClass('ascending');
                    $header.siblings().removeClass('ascending descending');
                    
                    if(compare.hasOwnProperty(order)) {
                        column = $controls.index(this);
                        rows.sort(function(a, b) {
                            a = $(a).find('td').eq(column).text();
                            b = $(b).find('td').eq(column).text();
                            return compare[order](a, b);
                        });
                        $tbody.append(rows);
                    }
                }

                console.log($controls);
            });
            console.log('sortable clicked', $controls);
        });
    });
    }

