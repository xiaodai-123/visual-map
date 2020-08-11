$(function () {

});



/**
 * 查询数据：这里请修改为交互的方式
 */
function selectData(callBack) {
    // 时间格式：yyyyMMddHHmm
    var param = {
        "startTimeStr":"201403242055",
        "endTimeStr":"201403252055",
        "pageSize":100
    }
    $.ajax({
        type: "POST",
        url: '/visual/map/gps/datalist',
        data: JSON.stringify(param),
        contentType: "application/json",
        // dataType:"json",
        success: function (data) {
            callBack(data);
        }
    });
}
