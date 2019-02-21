export const options = {
  pieOption: data => {
    return {
      series: [
        {
          name: '',
          type: 'pie',
          data: data,
          startAngle: 190,
          label: false
        }
      ]
    }
  },
  lineOptions: data => {
    return {
      data: data
    }
  }
}
