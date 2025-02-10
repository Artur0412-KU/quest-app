export function readFileAsDataURL(
  e: React.ChangeEvent<HTMLInputElement>,
): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const file = e.target.files?.[0];

    if (!file) {
      resolve(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = e => resolve(e.target?.result as string);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}
