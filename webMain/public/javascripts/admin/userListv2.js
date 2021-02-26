var _name = '';
var _fullname = '';
var _email = '';
var _positionName = '';
var _deparmentCode = '';

const editData = () => {
    $('#txtUserName').val(_name);
    $('#txtFullName').val(_fullname);
    $('#txtEmail').val(_email);
    $('#txtPositionsName').val(_positionName);
    $('#txtDepartmentCode').val(_deparmentCode);
}
const resetForm = () => {
    $('#txtUserName').val('');
    $('#txtFullName').val('');
    $('#txtEmail').val('');
    $('#txtPositionsName').val('');
    $('#txtDepartmentCode').val('');
}

const saveData = () => {
        var name = $('#txtUserName').val();
        var fullName = $('#txtFullName').val();
        var email = $('#txtEmail').val();
        var positionName = $('#txtPositionsName').val();
        var departmentCode = $('#txtDepartmentCode').val();
        var status=$('#btnSave').val();
        console.log(status);
        var data = {
            Name: name,
            FullName: fullName,
            Email: email,
            PositionName: positionName,
            DepartmentCode: departmentCode,
            Status:status
        };

        // data.Name=singleValues;
        // data.title = "title";
        // data.message = "message";
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/admin/userlistv2',
            success: function(data) {
                if (data) {
                    // console.log('success');
                    console.log(JSON.stringify(data));
                    $('#modalAddUpdate').modal('hide');
                    alert("success");
                    // location.reload();
                } else {
                    alert("Error");
                }

            }
        });

    }
    //ham khoi tao: goi tat ca cac ham khac trong day
$(document).ready(function() {
    var table = $('.mydatatable').DataTable();
    $('.mydatatable tbody').on('click', 'tr', function() {
        var data = table.row(this).data();
        _name = data[0];
        _fullname = data[1];
        _email = data[2];
        _positionName = data[3];
        _deparmentCode = data[4];
        // alert('You clicked on ' + data[0] + '\'s row');
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $('#btnAddNew').click(function() {
        //show modal
        $('#modalAddUpdate').modal('show');
        $('#btnSave').val("submitInsert");
        resetForm();
    });

    $('#btnedit').click(function() {
        //show modal
        $('#modalAddUpdate').modal('show');
        // document.getElementById("btnSaveId").value = "submitAdd";
        $('#btnSave').val("submitEdit");
        editData();
    });

    $('#btnSave').click(function(e) {
        e.preventDefault();
        console.log('select_link clicked');
        saveData();
    });
});

$(`.mydatatable`).DataTable({
    scrollY: 320,
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