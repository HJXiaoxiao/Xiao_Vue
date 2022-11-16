<template>
    <div style="padding: 20px">
        <el-dialog
            :title="dialogTitle"
            :visible.sync="dialogVisible"
            v-if="dialogVisible"
            width="60%">
            <el-form ref="refForm" :disabled="action === 'scan'" :model="formData"
                :label-width="(config.labelWidth || '100')+'px'"
                :size="config.size||'mini'">
                <el-row :gutter="config.gutter">
                    <el-col :key="index" :span="item.span?item.span:12"
                        v-for="(item,index) in config.itemList.filter(item=>!item.hideInForm)">
                        <el-form-item
                            style="height: 36px"
                            :label="item.label+ (config.labelPostfix || '：')"
                            :prop="item.prop"
                            :rules="[
                                {required: item.require, message: '请输入'+item.label},
                                {pattern:item.pattern, message: item.formatMsg || '格式不符合规范' }]">
                            <!--单行文本 input-->
                            <el-input
                                v-if="item.type=='input'|| item.type===undefined"
                                show-word-limit
                                :disabled="item.disabled"
                                :maxlength="item.maxlength"
                                :placeholder="item.placeholder"
                                :prefix-icon="item.preIcon"
                                :style="'width:'+item.width||'100%'"
                                clearable
                                type="text"
                                v-model="formData[item.prop]">
                            </el-input>
                            <!--单选 radio-->
                            <el-radio-group v-if="item.type=='radio'" v-model="formData[item.prop]">
                                <el-radio :key="index" :label="items.value" v-for="(items,index) in item.list||[]">
                                    {{items.label}}
                                </el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span v-if="action !== 'scan'" slot="footer">
                <el-button size="small" @click="dialogVisible = false">取 消</el-button>
                <el-button size="small" type="primary" @click="confirm">确 定</el-button>
            </span>
        </el-dialog>
        <el-row style="margin: 16px 0px">
            <el-button size="mini" type="primary" @click="add">新增</el-button>
        </el-row>
        <el-table ref="refTable" :data="tableData" border>
            <el-table-column
                v-for="(item,index) in config.itemList.filter(item=>!item.hideInTable)"
                :align="item.align?item.align:'center'"
                :label=item.label
                :prop=item.prop
                :min-width="item.minWidth?item.minWidth:'120'"
                :formatter="item.formatter"
                :key="index"
                show-overflow-tooltip>
                <template slot-scope="scope">
                    <span v-if="item.list && item.list.length>0">{{getLabel(item.list,scope.row[item.prop])}}</span>
                    <span v-else>{{scope.row[item.prop]}}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                align="center"
                width="160">
                <template slot-scope="scope">
                    <el-button @click="scan(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="edit(scope.$index)" type="text" size="small">编辑</el-button>
                    <el-button @click="del(scope.$index,scope.row.id)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name:'recruitVue',
        data() {
            return {
                index: null,
                action: '',
                dialogTitle: '',
                dialogVisible: false,
                config: {
                    itemList: [
                        {
                            label: '姓名',
                            prop: 'name',
                            type: 'input',
                            require: true
                        },
                        {
                            label: '性别',
                            prop: 'gender',
                            type: 'radio',
                            defaultValue: '1',
                            list: [
                                {
                                    label: '男',
                                    value: '1'
                                },
                                {
                                    label: '女',
                                    value: '2'
                                },
                            ]
                        },
                        {
                            label: '手机号码',
                            prop: 'phone',
                            type: 'input',
                            maxlength: 11,
                            // pattern: this.GLOBAL.phoneRegExp,
                            hideInTable: true
                        },
                        {
                            label: '创建日期',
                            prop: 'date',
                            hideInForm: true
                        },
                    ]
                },
                formData: {},
                tableData: [],
            }
        },
        methods: {
            // 表单校验
            ifvalid() {
                let result = true
                this.$refs.refForm.validate(valid => {
                    if (!valid) {
                        result = false
                    }
                })
                return result
            },
            // 保存/修改确认
            confirm() {
                if (this.ifvalid()) {
                    if (this.action === 'add') {
                        this.$set(this.formData,'date',new Date().format("yyyy-MM-dd hh:mm:ss"))
                        this.tableData.push(this.formData)
                    }
                    if (this.action === 'edit') {
                        this.$set(this.tableData, this.index, this.formData)
                    }
                    this.dialogVisible = false
                }
            },
            add() {
                this.action = 'add'
                this.dialogTitle = '新增'
                this.formData = {}
                this.config.itemList.forEach(
                    item => {
                        if (item.defaultValue !== undefined) {
                            this.$set(this.formData, item.prop, item.defaultValue)
                        }
                    }
                )
                this.dialogVisible = true
            },
            edit(index) {
                this.index = index
                this.action = 'edit'
                this.dialogTitle = '修改'
                this.formData = JSON.parse(JSON.stringify(this.tableData[index]))
                this.dialogVisible = true
            },
            del(index, id) {
                this.$confirm('确定删除吗?', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.tableData.splice(index, 1);
                })
            },
            scan(row) {
                this.formData = row
                this.action = 'scan'
                this.dialogTitle = '详情'
                this.dialogVisible = true
            },
            // 表格中，显示表单中下拉数据的中文
            getLabel(list, value) {
                for (let item of list) {
                    if (item.value === value) {
                        return item.label
                        break
                    }
                }
            },
        }
    }

    // 为Date原型添加时间格式化方法
    Date.prototype.format = function(fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            S: this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                (this.getFullYear() + "").substr(4 - RegExp.$1.length)
            );
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length == 1
                        ? o[k]
                        : ("00" + o[k]).substr(("" + o[k]).length)
                );
            }
        }
        return fmt;
    };
</script>
<style scoped>
</style>