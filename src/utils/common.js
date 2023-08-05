export const checkContentEmpty = (data) => {
  return data ? data : "-";
};

export const excelDateToJSDate = (serial) => {
  let utc_days = Math.floor(serial - 25569);
  let utc_value = utc_days * 86400;
  let date_info = new Date(utc_value * 1000);

  let fractional_day = serial - Math.floor(serial) + 0.0000001;

  let total_seconds = Math.floor(86400 * fractional_day);

  let seconds = total_seconds % 60;

  total_seconds -= seconds;

  const hours = Math.floor(total_seconds / (60 * 60));
  const minutes = Math.floor(total_seconds / 60) % 60;

  return new Date(
    date_info.getFullYear(),
    date_info.getMonth(),
    date_info.getDate(),
    hours,
    minutes,
    seconds
  ).toLocaleDateString();
};

export const promiseFunc = (time = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export const animateWithDelay = (time = 500) => {
  return new Promise((resolve) => {
    const animationCallback = () => {
      // 在這可以處理動畫效果

      // 延遲執行時間（例如：500毫秒）
      setTimeout(() => {
        resolve();
      }, time);
    };

    // 請求執行動畫幀，並傳入回調函數
    requestAnimationFrame(animationCallback);
  });
};
