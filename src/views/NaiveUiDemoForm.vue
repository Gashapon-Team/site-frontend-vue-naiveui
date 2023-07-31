<template>
  <div>
    <n-form
      ref="formRef"
      :model="model"
      :rules="rules"
      label-placement="left"
      require-mark-placement="right-hanging"
      :size="size"
      label-width="auto"
      :style="{
        maxWidth: '640px',
        margin: '50px 0px'
      }"
    >
      <n-h2>建立商店</n-h2>
      <n-form-item label="商店名稱" path="inputValue">
        <n-input v-model:value="model.inputValue" placeholder="請輸入商店名稱" />
      </n-form-item>
      <n-form-item label="商店敘述" path="textareaValue">
        <n-input
          v-model:value="model.textareaValue"
          placeholder="請輸入商店敘述"
          type="textarea"
          :autosize="{
            minRows: 3,
            maxRows: 5
          }"
        />
      </n-form-item>
      <n-form-item label="商店屬性" path="selectValue">
        <n-select
          v-model:value="model.selectValue"
          placeholder="請選擇商店屬性"
          :options="shopAttrOptions"
        />
      </n-form-item>
      <n-form-item label="商品類型 (複選)" path="multipleSelectValue">
        <n-select
          v-model:value="model.multipleSelectValue"
          placeholder="請選擇商品類型 (複選)"
          :options="productOptions"
          multiple
        />
      </n-form-item>
      <n-form-item label="日期時間" path="datetimeValue">
        <n-date-picker
          v-model:value="model.datetimeValue"
          type="datetime"
          placeholder="請選擇日期時間"
        />
      </n-form-item>
      <n-form-item label="日期區間" path="daterangeValue">
        <Daterange v-model:value="model.daterangeValue" @returnDaterange="setDaterange($event)" :reset-trigger="resetFlag"/>
      </n-form-item>
      <n-form-item label="時間" path="timePickerValue">
        <n-time-picker v-model:value="model.timePickerValue" placeholder="請選擇時間" />
      </n-form-item>
      <n-form-item label="開關" path="switchValue">
        <n-switch v-model:value="model.switchValue" />
      </n-form-item>
      <n-form-item label="選項 (複選)" path="checkboxGroupValue">
        <n-checkbox-group v-model:value="model.checkboxGroupValue">
          <n-space>
            <n-checkbox value="Option1"> 選項 1 </n-checkbox>
            <n-checkbox value="Option2"> 選項 2 </n-checkbox>
            <n-checkbox value="Option3"> 選項 3 </n-checkbox>
          </n-space>
        </n-checkbox-group>
      </n-form-item>
      <n-form-item label="單選選項" path="radioGroupValue">
        <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup1">
          <n-space>
            <n-radio value="Radio1"> 單選選項 1 </n-radio>
            <n-radio value="Radio2"> 單選選項 2 </n-radio>
            <n-radio value="Radio3"> 單選選項 3 </n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item>
      <n-form-item label="單選選項按鈕" path="radioGroupValue">
        <n-radio-group v-model:value="model.radioButtonGroupValue" name="radioButtongroup2">
          <n-radio-button value="RadioButton1"> 選項按鈕 1 </n-radio-button>
          <n-radio-button value="RadioButton2"> 選項按鈕 2 </n-radio-button>
          <n-radio-button value="RadioButton3"> 選項按鈕 3 </n-radio-button>
        </n-radio-group>
      </n-form-item>
      <n-form-item label="數量" path="inputNumberValue">
        <n-input-number
          v-model:value="model.inputNumberValue"
          placeholder="數量"
          :style="{ maxWidth: '100px' }"
        />
      </n-form-item>

      <n-form-item label="十的倍數" path="sliderValue">
        <n-slider v-model:value="model.sliderValue" :step="10" />
      </n-form-item>
      <n-form-item label="Transfer" path="transferValue">
        <n-transfer v-model:value="model.transferValue" :options="generalOptions" />
      </n-form-item>
      <n-form-item label="Nested Path" :show-feedback="false">
        <n-grid :cols="2" :x-gap="24">
          <n-form-item-gi path="nestedValue.path1">
            <n-input v-model:value="model.nestedValue.path1" placeholder="Nested Path 1" />
          </n-form-item-gi>
          <n-form-item-gi path="nestedValue.path2">
            <n-select
              v-model:value="model.nestedValue.path2"
              placeholder="Nested Path 2"
              :options="generalOptions"
            />
          </n-form-item-gi>
        </n-grid>
      </n-form-item>
      <div style="display: flex; justify-content: center">
        <n-button round type="default" @click="reset" style="margin-right: 10px"> 重設 </n-button>
        <n-button round type="primary" @click="handleValidateButtonClick"> 送出 </n-button>
      </div>
    </n-form>

    <pre>{{ JSON.stringify(model, null, 2) }}</pre>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue'
import { useMessage } from 'naive-ui'
import Daterange from '../components/Daterange.vue'

const formRef = ref(null)
const message = useMessage()
let resetFlag = ref(false)

function initModel() {
  return {
    inputValue: null,
    textareaValue: null,
    selectValue: null,
    multipleSelectValue: null,
    datetimeValue: null,
    daterangeValue: [ new Date(new Date().setMonth(new Date().getMonth() - 3)).toISOString().substr(0, 10), new Date().toISOString().substr(0, 10) ], //init last 3 month
    timePickerValue: null,
    nestedValue: {
      path1: null,
      path2: null
    },
    switchValue: false,
    checkboxGroupValue: null,
    radioGroupValue: null,
    radioButtonGroupValue: null,
    inputNumberValue: null,
    sliderValue: 0,
    transferValue: null
  }
}
let model = reactive(initModel())

const setDaterange = (value) => {
    console.log('setDaterange value',value)
  model.daterangeValue = value
}

const reset = async () => {
  resetFlag.value = true //daterange 
  formRef.value?.restoreValidation()
  Object.assign(model, initModel()) // deep copy

  await nextTick() //nextTick() 在DOM(子组件)更新完成後延遲執行後續程式。
  resetFlag.value = false 
//   setTimeout(() => {
//     resetFlag.value = false
//   }, 0)

  console.log('reset', model)
}

const size = ref('medium')

const generalOptions = ['實體商店', '網路商店', '卡機商店'].map((v) => ({
  label: v,
  value: v
}))
const shopAttrOptions = ['實體商店', '網路商店', '卡機商店'].map((v) => ({
  label: v,
  value: v
}))
const productOptions = ['食品', '服飾', '鞋包配件', '居家', '3C家電', '其它'].map((v) => ({
  label: v,
  value: v
}))
// define the rules object
const rules = {
  inputValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: '請輸入商店名稱'
  },
  textareaValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: '請輸入商店敘述'
  },
  selectValue: {
    required: true,
    trigger: ['blur', 'change'],
    message: '請選擇商店屬性'
  },
  multipleSelectValue: {
    type: 'array',
    required: true,
    trigger: ['blur', 'change'],
    message: '請選擇商品類型 (複選)'
  },
  datetimeValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '請選擇日期時間'
  },
  daterangeValue: {
    type: 'array',
    required: true,
    trigger: ['blur', 'change'],
    message: '請選擇日期區間'
  },
  checkboxGroupValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: '請選擇選項 (複選)'
  },
  radioGroupValue: {
    required: true,
    trigger: 'change',
    message: '請選擇單選選項'
  },
  radioButtonGroupValue: {
    required: true,
    trigger: 'change',
    message: '請選擇單選選項按鈕'
  },
  inputNumberValue: {
    type: 'number',
    required: true,
    validator(rule, value) {
      return value > 0 && value <= 50
    },
    trigger: ['blur', 'change'],
    message: '數量不能小於0、大於50'
  },
  timePickerValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '請選擇時間'
  },
  sliderValue: {
    validator(rule, value) {
      return value > 0
    },
    required: true,
    trigger: ['blur', 'change'],
    message: '不得小於0'
  },
  transferValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: '請輸入transferValue'
  },
  nestedValue: {
    path1: {
      required: true,
      trigger: ['blur', 'input'],
      message: '請輸入nestedValue.path1'
    },
    path2: {
      required: true,
      trigger: ['blur', 'change'],
      message: '請輸入nestedValue.path2'
    }
  }
}

const handleValidateButtonClick = (e) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('送出成功')
    } else {
      console.log(errors)
      message.error('輸入有誤，請確認訊息')
    }
  })
}
</script>
<style scoped>
.n-form-item {
  margin-bottom: 10px;
}
</style>
