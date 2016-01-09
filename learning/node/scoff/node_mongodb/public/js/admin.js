$(function () {
    $('.del').click(function (e) {
        var target = $(e.target);
        var id = target.data('id');
        var tr = $('.item-id-' + id);

        $.ajax({
            type: 'DELETE',
            url: '/admin/movie/list?id=' + id
        })
            .done(function (results) {
                if (results.success === 1) {
                    if (tr.length > 0) {
                        tr.remove();
                    }
                }
            });
    });

    $('#douban').blur(function () {
        var $this = $(this);
        var id = $this.val();

        $.ajax({
            url: 'https://api.douban.com/v2/movie/' + id,
            cache: true,
            type: 'get',
            dataType: 'jsonp',
            crossDomain: true,
            jsonp: 'callback',
            success: function (data) {
                $('#inputTitle').val(data.title);
                $('#inputDoctor').val(data.attrs.director[0]);
                $('#inputCountry').val(data.attrs.country);
                $('#inputLanguage').val(data.attrs.language);
                $('#inputPoster').val(data.image);
                $('#inputYear').val(data.attrs.year);
                $('#inputSummary').val(data.summary);
            }
        });
    });
});