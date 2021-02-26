// const Sequelize=require('sequelize');
// const sequelize=new Sequelize(
//     'MESDB',//db name
//     'mesmgr',//username
//     'mesmgr',
//     {
//         dialect:'mssql',
//         host:'192.5.1.20',
//         operatorsAliases:false,
//         dialectOptions:{
//             options:{
//                 validateBulkLoadParameters: true,
//             }

//         },
   
//         pool:{
//             max:5,
//             min:0,
//             require:30000,
//             idle:10000
//         }
//     }
// );
// const Op=Sequelize.Op;
// module.exports={
//     sequelize,
//     Op

// }

// const Sequelize=require('sequelize');
// const sequelize=new Sequelize(
//     'wacoal',//db name
//     'sa',//username
//     'sa',
//     {
//         dialect:'mssql',
//         host:'localhost',
//         operatorsAliases:false,
//         dialectOptions:{
//             options:{
//                 validateBulkLoadParameters: true,
//             }

//         },
   
//         pool:{
//             max:5,
//             min:0,
//             require:30000,
//             idle:10000
//         }
//     }
// );
// const Op=Sequelize.Op;
// module.exports={
//     sequelize,
//     Op

// }


//dung server HRM-APP

const Sequelize=require('sequelize');
const sequelize=new Sequelize(
    'wacoal',//db name
    'sa',//username
    'asd@123',
    {
        dialect:'mssql',
        host:'192.168.79.125',
        operatorsAliases:0,
        dialectOptions:{
            options:{
                validateBulkLoadParameters: true,
            }

        },
   
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:10000
        }
    }
);
const Op=Sequelize.Op;
module.exports={
    sequelize,
    Op

}