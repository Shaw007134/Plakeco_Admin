function showError(node) {

}

layui.use(['form', 'layer'], function () {
  var form = layui.form;
  var layer = layui.layer;
  var $ = layui.jquery

  form.on('submit(login)', function (data) {
    layer.msg(JSON.stringify(data.field) + '123');
    console.log(data)
    // return false;
  })
})
