<template>
  <div>
    <div class="tagTitle">全部标签</div>
    <div class="tagWrap">
      <ul>
        <li v-for="(item, index) in tags" :key="index" class="tagItem">
          <span class="tagName">{{ item }}</span>
          <div class="icons">
            <i class="el-icon-edit edit" @click="editTag(index)"></i>
            <i class="el-icon-delete delete" @click="deleteTag(index)"></i>
          </div>
        </li>
      </ul>
      <div class="addBtn">
        <el-button type="primary" icon="el-icon-plus" @click="addTag"
          >新建标签</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tag",
    data() {
      return {
        tags: this.$store.getters.getTags,
      };
    },
    methods: {
      editTag(index) {
        this.$prompt("请输入新的标签名", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputValue: this.tags[index],
          inputPattern: /^\S{1,6}$/,
          inputErrorMessage: "不能有空格，且字数不能超过6个",
        })
          .then(({ value }) => {
            if (this.tags.includes(value)) {
              this.$message.warning("标签名重复");
            } else {
              let newTags = this.tags;
              newTags[index] = value;
              this.tags = [...newTags];
              this.$store.commit("setTags", newTags);
              this.$message.success("你修改的新标签名是：" + value);
            }
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "取消输入",
            });
          });
      },
      deleteTag(index) {
        this.$confirm("确定删除该标签？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.tags.splice(index, 1);
            this.$store.commit("setTags", this.tags);
            this.$message.success("删除标签成功");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      },
      addTag() {
        this.$prompt("请输入标签名", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputPattern: /^\S{1,6}$/,
          inputErrorMessage: "不能有空格，字数不能超过6个",
        })
          .then(({ value }) => {
            if (this.tags.includes(value)) {
              this.$message.warning("标签名重复");
            } else {
              this.tags.push(value);
              this.$store.commit("setTags", this.tags);
              this.$message.success("新建的标签名是：" + value);
            }
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "取消输入",
            });
          });
      },
    },
  };
</script>

<style>
  .tagTitle {
    background-color: #bbddf3;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
  }
  .tagWrap {
    padding-bottom: 66px;
  }
  .tagItem {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px 10px;
    background-color: white;
    border-radius: 5px;
    font-size: 18px;
  }
  .edit {
    padding-right: 20px;
    color: #bbddf3;
  }
  .delete {
    color: red;
  }
  .addBtn {
    display: flex;
    justify-content: center;
  }
</style>
