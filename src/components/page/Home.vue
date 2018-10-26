<template>
    <div class="home">
    <el-container>  
        <el-header height="100px">
            <div class="header-text">
                <span>操作</span>
            </div>
            <div class="header-right">
                <el-button type="primary" plain size="small" @click.prevent="addRow(tableData)">
                    <span>增加</span>
                </el-button>
                <el-button type="primary" plain size="small" @click.prevent="delData(scope.$index,tableData)">
                    <span>删除</span>
                </el-button>
                <el-button type="primary" plain size="small">
                    <span>预览</span>
                </el-button>
            </div>
            
        </el-header>   
        <el-container>
            <el-main>
                <el-table :data="tableData" border style="width: 90%" tooltip-effect="dark" ref="table" @selection-change='selectRow' stripe show-summary :span-method="arraySpanMethod">
                    <el-table-column
                        label="序号"
                        type="index"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="stage"
                        label="阶段"
                        >
                       <template slot-scope="scope">
                        <el-input v-model="scope.row.stage"></el-input>
                       </template>                      
                    </el-table-column>
                    <el-table-column
                        prop="category.name"
                        label="类别"
                    >
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.category"></el-input>
                       </template>
                    </el-table-column>
                    <el-table-column
                        prop="module"
                        label="模块"
                    >
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.module"></el-input>
                       </template>
                    </el-table-column>
                    <el-table-column
                        prop="description"
                        label="描述"
                        >
                        <template slot-scope="scope">
                        <el-input v-model="scope.row.description"></el-input>
                       </template>
                    </el-table-column>
                    <el-table-column
                        prop="workHours"
                        label="工时"
                        >
                        <template slot-scope="scope">
                        <el-input v-model="scope.row.workHours"></el-input>
                       </template>
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        label="价格"
                        >
                        <template slot-scope="scope">
                        <el-input v-model="scope.row.price"></el-input>
                       </template>
                    </el-table-column>
            </el-table>
        </el-main>
    </el-container>        
    </el-container>
    </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      selectlistRow: [],
      tableData: [
        {
          rowNum: 1,
          stage: "开发",
          category: [
            {
              name: "商品展示"
            },
            {
              name: "支付"
            }
          ],
          module: "为页面",
          description: "可自定义的多媒体展示页面",
          workHours: "20",
          price: "1820"
        },
        {
          rowNum: 1,
          stage: "开发",
          category: "商品展示",
          module: "为页面",
          description: "可自定义的多媒体展示页面",
          workHours: "20",
          price: "1820"
        }
      ]
    };
  },
  components: {},
  methods: {
    // 获取表格选中时的数据
    selectRow(val) {
      console.log("selectRow" + val);
      this.selectlistRow = val;
    },
    // 增加行
    addRow() {
      var list = {
        rowNum: "",
        stage: this.stage,
        category: this.category,
        module: this.module,
        description: this.description,
        workHours: this.workHours,
        price: this.price
      };
      this.tableData.unshift(list);
    },
    delData() {
      for (let i = 0; i < this.selectlistRow.length; i++) {
        let val = this.selectlistRow;
        val.forEach((val, index) => {
          this.tableData.forEach((v, i) => {
            if (val.rowNum === v.rowNum) {
              // i 为选中的索引
              this.tableData.splice(i, 1);
            }
          });
        });
      }
      // 删除完数据之后清除勾选框
      this.$refs.tableData.clearSelection();
    },
    // 合并行或者
    // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex % 2 === 0) {
    //     if (columnIndex === 0) {
    //       return [1, 2];
    //     } else if (columnIndex === 1) {
    //       return [0, 0];
    //     }
    //   }
    // }
  }
};
</script>
<style scoped>
table {
  width: 500px;
  border: 1px solid #ccc;
  padding: 0px;
}
thead {
  background-color: #ccc;
}
thead tr th {
  background-color: #fff;
  border: 1px solid #ccc;
}
tbody tr td {
  background-color: #fff;
  border: 1px solid #ccc;
}
.el-header {
  border: 1px solid #ccc;
  padding: 0px;
  margin-bottom: 20px;
}
.header-text {
  padding: 5px 15px;
  border-bottom: 1px solid #ccc;
  background-color: #e9e9e9;
}
.header-text span {
  font-size: 10;
  color: #333333;
}
.header-right {
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.header-right .el-button {
  margin-top: 18px;
  margin-right: 20px;
  float: right;
}
.el-main {
  padding: 0px;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>


