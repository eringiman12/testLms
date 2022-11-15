$(function() {
    // 処理内容の入力処理
    $("#add_process").on('click', function() {
        alert($("#Shori_content_box input").length());

        // 処理内容が入力されている
        if ($("#process_text").val()) {
            $("#Shori_content_box").append("<input type=\"text\" class=\"aaaa\" value=" + $("#process_text").val() + ">");
        } else {
            alert("処理内容が入力されていません");
        }
    });
});
