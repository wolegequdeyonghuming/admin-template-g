<template>
  <div>
    <div class="search-layout">
      <span class="search-label">姓名：</span>
      <el-input></el-input>
      <span class="search-label">年龄：</span>
      <el-select v-model="age" placeholder="请选择">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.value"
                :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary">搜索</el-button>
      （中文冒号 文字距输入框10px）
    </div>
    <el-table stripe
              :data="data1"
              style="width: 100%"
              :row-class-name="rowClass"
              @row-click="rowClick">
      <el-table-column
              prop="name"
              label="姓名"
              width="180">
      </el-table-column>
      <el-table-column
              prop="age"
              label="年龄"
              width="180">
      </el-table-column>
      <el-table-column
              prop="address"
              label="地址">
      </el-table-column>
      <el-table-column
              label="操作">
        <template slot-scope="scope">
          <el-link type="primary"
                   @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-link>
          <span class="table-divider"></span>
          <el-link type="danger"
                   @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-link>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: right;background-color: #fff;padding: 10px 0;">
      <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
              @current-change="handleCurrentChange">
      </el-pagination>
    </div>

    <!--弹框-->
    <el-dialog
            title="编辑"
            :visible.sync="dialogVisible"
            width="30%">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" size="small" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'CGTableDemo',
  data() {
    return {
      dialogVisible: false,
      currentPage3: 5,
      age: '1-18',
      options: [
        {
          value: '1-18'
        }, {
          value: '其他'
        }
      ],
      selectIndex: '',
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        }, {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        }, {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        }, {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      formLabelWidth: '100px',
      form: {
        name: '',
        region: ''
      },
    }
  },
  methods: {
    //翻页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //给选中的行添加样式
    rowClass({row, rowIndex}) {
      if (this.selectIndex === rowIndex) {
        console.log(row)
        return 'selected-table-row'
      }
    },
    //行点击
    rowClick(row) {
      this.data1.forEach((item, i) => {
        if (item.name === row.name) {
          this.selectIndex = i
        }
      })
    },
    //编辑
    handleEdit(index, row) {
      console.log(row)
      this.dialogVisible = true
    },
    //删除
    handleDelete(index, row) {
      console.log(row)
      this.selectIndex = index
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!',
          duration: '8000'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
          duration: '8000'
        });
      });
    }
  }
}
</script>
<style scoped>

</style>
