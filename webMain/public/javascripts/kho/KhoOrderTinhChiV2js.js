$(document).ready(function() {
    document.getElementById("btnNewId").hidden = true;
    document.getElementById("btnEditId").hidden = true;
    document.getElementById("btnDeleteId").hidden = true;
    document.getElementById("btnSaveId").hidden = true;
    document.getElementById("btnCancelId").hidden = true;
    });

    var table = $('.mydatatable').DataTable({
        dom: 'Bfrtip',//bat tinh nang su dung cac nut copy,export excel, pdf
        scrollY:320, // bat tinh nang scroll chieu dai
        deferRender:    true,
        scroller:       true,
        
        scrollX: true,// bat tinh nang scroll chieu rong
        scrollCollapse: true,
        paging: true,//bat tinh nang chia trang
        lengthChange: false,// tinh nang show so dong tren table
        buttons: [ 'copy', 'excel', 'pdf', 'colvis' ],
    
        // colReorder: true, //di chuyen cot tren table https://cdn.datatables.net/colreorder/1.5.3/js/dataTables.colReorder.min.js
        // autoFill: true ,//giong ctrl+D tren excel https://cdn.datatables.net/autofill/2.3.5/js/dataTables.autoFill.min.js
    
        // colReorder: true //doi vi tri cot tren table https://cdn.datatables.net/colreorder/1.5.3/js/dataTables.colReorder.min.js
    
        //giu nguyen cot khong di chuyen khi scroll ngang https://cdn.datatables.net/fixedcolumns/3.3.2/js/dataTables.fixedColumns.min.js
        // fixedColumns:   {
        //     leftColumns: 1,
        //     rightColumns: 1
        // }
    
        // keys: true // focus cell  https://cdn.datatables.net/keytable/2.6.0/js/dataTables.keyTable.min.js
    
        //row group https://cdn.datatables.net/rowgroup/1.1.2/js/dataTables.rowGroup.min.js
        // order: [[2, 'asc']],
        // rowGroup: {
        //     dataSrc: 2
        // }
    
        // rowReorder: true //di chuyen dong tren table https://cdn.datatables.net/rowreorder/1.2.7/js/dataTables.rowReorder.min.js
    
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
    table.buttons().container()
    .appendTo( ' .col-sm-6:eq(0)' );

    $(document).ready(function() {

        $('a.toggle-vis').on( 'click', function (e) {
            e.preventDefault();
     
            // Get the column API object
            var column = table.column( $(this).attr('data-column') );
     
            // Toggle the visibility
            column.visible( ! column.visible() );
        } );



        });
       