<template setup>
    <div>
        <n-date-picker
            v-model:formatted-value="dateRangeValue"
            value-format="yyyy-MM-dd"
            type="daterange"
            :shortcuts="rangeShortcuts"
            start-placeholder="起始日"
            end-placeholder="結束日"
            close-on-select
            @update:value="updateDate"
        />
        <pre v-show="isShowPreData">{{ JSON.stringify(dateRangeValue) }}</pre>
    </div>
</template>
  
  <script>
  import { defineComponent, ref, onMounted  } from "vue";
  
  export default defineComponent({
    props: {
        isShowPreData: Boolean
    },
    setup( props, { emit } ) {
        const isShowPreData = ref(false)

        const end = new Date();
        const last3month = new Date();
        last3month.setTime(last3month.getTime() - 3600 * 1000 * 24 * 90); //近三個月
        let dateRangeValue = ref([formatDate(last3month), formatDate(end)]);
        function updateDate() {
            emit('returnDaterange', dateRangeValue);
        }

        //轉換時間格式為"yyyy-MM-dd"
        function formatDate(date) { 
            let year = date.getFullYear();
            let month = date.getMonth() + 1; // js 的 getMonth() 返回月份從0開始，所以需要加 1
            let day = date.getDate();
            month = month < 10 ? '0' + month : month;
            day = day < 10 ? '0' + day : day;
            return `${year}-${month}-${day}`;
        }

        onMounted(() => { //created
            updateDate();
        });

      return {
        dateRangeValue: ref([formatDate(last3month), formatDate(end)]),
        updateDate,
        rangeShortcuts: {
            "近一周": () => {
                const last1week = new Date()
                last1week.setTime(last1week.getTime() - 3600 * 1000 * 24 * 7)
                return [last1week, end]
            },
            "近一個月": () => {
                const last1month = new Date()
                last1month.setTime(last1month.getTime() - 3600 * 1000 * 24 * 30)
                return [last1month, end]
            },
            "近三個月": [last3month, end],
        }

      };
    }
  });
  </script>