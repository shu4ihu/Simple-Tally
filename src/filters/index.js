// 格式化时间
function filterDate(val) {
  return new Date(val).toLocaleDateString().replace(/\//g, "-");
}
export { filterDate };
