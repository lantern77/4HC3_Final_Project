var musicData = [
    {
        "Track" : 'tuesday-song',
        "Album" : 'Weekdays-album',
        "Duration" : "20mins",
    }
]
var videoData = [
    {
        "Name" : 'Name of video',
        "Duration" : "20mins",
    }
]
for (var i=0; i < 10; i++) {
    musicData.push(musicData[0]);
    videoData.push(videoData[0]);
}


var dataTable =  $("table.table.music-playlist").DataTable({
        "searching" : false,
        "lengthChange" : false,
        "pageLength" : 4,
        "order": [[ 0, "desc" ]],
        "columns" : [
        {"data": "Track"},
        {"data": "Album"},
        {"data": "Duration"},
        ],
        "data" : musicData
        });
var dataTable =  $("table.table.video-playlist").DataTable({
        "searching" : false,
        "lengthChange" : false,
        "pageLength" : 4,
        "order": [[ 0, "desc" ]],
        "columns" : [
        {"data": "Name"},
        {"data": "Duration"},
        ],
        "data" : videoData
});
