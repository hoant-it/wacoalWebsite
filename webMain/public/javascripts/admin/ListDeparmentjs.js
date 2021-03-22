var _departmentCode = '';
var _departmentName = '';

const editData = () => {
         //show modal
 
     $('#btnSave').val("submitEdit");
     $('#txtMenuCode').val(_departmentCode);
     $('#txtFormName').val(_departmentName);
     $('#modalAddUpdate').modal('show');
     $('#txtMenuCode').attr("readonly","true") 
     $('#txtshowCode').attr("readonly","true") 
     $('#modalAddUpdate').on('shown.bs.modal', function () {
        $('#txtFormName').focus();
     }) 
 
}
const resetForm = () => {
    $('#modalAddUpdate').modal('show');
        $('#btnSave').val("submitInsert");
        // $('#txtMenuCode').removeAttr("readonly") 
        $('#modalAddUpdate').on('shown.bs.modal', function () {
            $('#txtFormName').focus();
        }) 

    // $('#txtMenuCode').val('');
    $('#txtMenuCode').attr("readonly","true") ;
    $('#txtFormName').val('');
    $('#txtFormCode').val('');
    $('#txtprojectCode').val('');
    $('#txtshowCode').val('ShowWeb');
    $('#txtshowCode').attr("readonly","true") 
    $('#txtSystemName').val('');
}

const saveData = () => {
        var menuCode = $('#txtMenuCode').val();
        var formName = $('#txtFormName').val();
        var formCode = $('#txtFormCode').val();
        var projectCode = $('#txtprojectCode').val();
        var showCode = $('#txtshowCode').val();
        var systemName=$('#txtSystemName').val();
        var status=$('#btnSave').val();
        // console.log(status);
        var data = {
            MenuCode: menuCode,
            FormName: formName,
            FormCode: formCode,
            ProjectCode: projectCode,
            ShowCode: showCode,
            SystemName:systemName,
            Status:status
        };

        // data.Name=singleValues;
        // data.title = "title";
        // data.message = "message";
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/admin/listmenu',
            success: function(res) {
                if (res=== 'ok') {
                    // console.log('success');
                    console.log(JSON.stringify(res));
                    $('#modalAddUpdate').modal('hide');
                    alert("Update success");
                    location.reload();
                } else {
                    console.log(JSON.stringify(res));
                    alert( res);
                }
            }
        });

    }

    const deleteData = () => {
        var data={
            Name:_departmentCode,
        };
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/admin/listmenu/DeleteMenu',
            success: (res) =>{
                if(res.mes==='ok'){
                    // console.log(JSON.stringify(res));
                    alert("sucess");
                    location.reload();
                }
                else{
                    alert(res.send);
                }
            }
        });
    }

    //ham khoi tao: goi tat ca cac ham khac trong day
$(document).ready(function() {
    var table = $('.mydatatable').DataTable();
    $('.mydatatable tbody').on('click', 'tr', function() {
        var data = table.row(this).data();
        _departmentCode = data[0];
        _departmentName = data[1];
        // alert('You clicked on ' + data[0] + '\'s row');
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $('#btnAddNew').click(function() {
      
        // console.log('test ' +test);
        resetForm();
    });

    $('#btnedit').click(function() {
   
        editData();
    });

    $('#btnSave').click(function(e) {
        e.preventDefault();
        // console.log('select_link clicked');
        saveData();
    });

    $('#btnDeleteId').click((e) =>{
        e.preventDefault();
        if (!confirm("Are you sure you want to Delete selected row?")){
        }else{
            deleteData();
        }
      
    })

   
    


});

$(`.mydatatable`).DataTable({
    scrollY: 350,
    scrollX: true,
    scrollCollapse: true,
    paging: true,
    // "bSort": false
    "order": [],
    "columnDefs": [
        {
            "targets": [2],
            "visible": false,
            "searchable": false
        },

    ]
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