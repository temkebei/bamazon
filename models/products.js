module.exports = function (sequelize, DataTypes){
  const Products = sequelize.define('Products', {
      ProductsName: {
          type: DataTypes.STRING,
          allowNull: false
      },
     DepartmentName: {
          type: DataTypes.STRING,
          allowNull: false
      },
        Price: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      StockQuantity: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
  }, 
  {timestamps:false});
  return Products;
}