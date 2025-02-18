let prefix = "";

if (process.env.NEXT_PUBLIC_BASE_PATH) {
  prefix = process.env.NEXT_PUBLIC_BASE_PATH;
}

export { prefix };
