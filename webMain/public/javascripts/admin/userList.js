
    $(document).ready(function() {
        var table = $('.mydatatable').DataTable();
        $('.mydatatable tbody').on('click', 'tr', function() {
            var data = table.row(this).data();
            document.getElementById("usernameid").value = data[0];
            document.getElementById("fullnameid").value = data[1];
            document.getElementById("emailid").value = data[2];
            document.getElementById("positionnameid").value = data[3];
            document.getElementById("deparmentcodeid").value = data[4];
        // alert('You clicked on ' + data[0] + '\'s row');
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                table.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        });
        });

        document.getElementById("btnCancelId").disabled = true;


function newUser() {
document.getElementById("usernameid").value = "";
document.getElementById("fullnameid").value = "";
document.getElementById("emailid").value = "";
document.getElementById("positionnameid").value = "";
document.getElementById("deparmentcodeid").value = "";
document.getElementById("btnEditId").disabled = true;
document.getElementById("btnDeleteId").disabled = true;
document.getElementById("btnNewId").disabled = true;
document.getElementById("btnCancelId").disabled = false;
disableDatatable();
}

 const cancelUser = () => {
    document.getElementById("usernameid").value = "";
    document.getElementById("fullnameid").value = "";
    document.getElementById("emailid").value = "";
    document.getElementById("positionnameid").value = "";
    document.getElementById("deparmentcodeid").value = "";
    document.getElementById("btnEditId").disabled = false;
    document.getElementById("btnDeleteId").disabled = false;
    document.getElementById("btnNewId").disabled = false;
    document.getElementById("btnSaveId").disabled = true;
    document.getElementById("btnCancelId").disabled = true;
    enableDatatable();
};




$(`.mydatatable`).DataTable({
scrollY:320,
scrollX: true,
scrollCollapse: true,
paging: false,
// lengthChange: true,
// pagingType: full_numbers,

// initComplete:function () {
//     //fillter
//     this.api().columns().every( function () {
//         var column=this;
//         var select= $(`<select><option value=""> </option></select>`)
//         .appendTo($(column.header()).empty() )
//         .on( 'change', function () {
//             var val = $.fn.DataTable.util.escapeRegex(
//                 $(this).val()
//             );

//             column
//             .search( val ? '^'+val+'$' : '', true, false )
//             .draw();
//         } );

//         column.data().unique().sort().each( function (d, j){
//             select.append( '<option value="'+d+'">'+d+'</option>')
//         });

//     });
// },
//fillter
});
const enableDatatable = () => {
    $(document).ready(function() {
        var table = $('.mydatatable').DataTable();
        $('.mydatatable tbody').on('click', 'tr', function() {
            var data = table.row(this).data();
            document.getElementById("usernameid").value = data[0];
            document.getElementById("fullnameid").value = data[1];
            document.getElementById("emailid").value = data[2];
            document.getElementById("positionnameid").value = data[3];
            document.getElementById("deparmentcodeid").value = data[4];
        // alert('You clicked on ' + data[0] + '\'s row');
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                table.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        });
        });
}

const disableDatatable = () =>{
    $(document).ready(function() {
    var table = $('.mydatatable').DataTable();
$('.mydatatable tbody').on('click', 'tr', function() {
    var data = table.row(this).data();
    document.getElementById("usernameid").value = "";
    document.getElementById("fullnameid").value = "";
    document.getElementById("emailid").value = "";
    document.getElementById("positionnameid").value = "";
    document.getElementById("deparmentcodeid").value = "";
// alert('You clicked on ' + data[0] + '\'s row');
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});
});
}
