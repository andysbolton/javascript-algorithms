function checkNull(obj: any): any {
  return !obj ? fail("object is null") : obj;
}

export default checkNull;
