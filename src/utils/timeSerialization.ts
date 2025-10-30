// utils/timeSerialization.ts
import dayjs, { Dayjs } from "dayjs";

// 序列化 Dayjs 对象为可存储的数据
export const serializeTime = (time: Dayjs): string => time.toISOString();

// 反序列化可存储的数据为 Dayjs 对象
export const deserializeTime = (serializedTime: string): Dayjs =>
  dayjs(serializedTime);

// 时间存储的序列化器
export const timeSerializer = {
  serialize: (value: any) => {
    if (dayjs.isDayjs(value)) {
      return serializeTime(value);
    }
    if (Array.isArray(value)) {
      return JSON.stringify(
        value.map((item) => {
          dayjs.isDayjs(item) ? serializeTime(item) : item;
        })
      );
    }
    if (typeof value === "object" && value !== null) {
      {
        return JSON.stringify(
          Object.fromEntries(
            Object.entries(value).map(([key, value]) => [
              key,
              dayjs.isDayjs(value) ? serializeTime(value) : value,
            ])
          )
        );
      }
    }
    return JSON.stringify(value);
  },
  deserialize: (value: string) => {
    try {
      const parsed = JSON.parse(value);

      // 递归处理对象和数组，将 ISO 时间字符串转换为 Dayjs 对象
      const processValue = (val: any): any => {
        if (
          typeof val === "string" &&
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(val)
        ) {
          return deserializeTime(val);
        }
        if (Array.isArray(val)) {
          return val.map(processValue);
        }
        if (typeof val === "object" && val !== null) {
          return Object.fromEntries(
            Object.entries(val).map(([k, v]) => [k, processValue(v)])
          );
        }
        return val;
      };

      return processValue(parsed);
    } catch (error) {
      console.error("Error deserializing time:", error);
      return value;
    }
  },
};

export default timeSerializer;