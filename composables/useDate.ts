export default function useDate() {
    function getCurrentDate() {
        return new Date();
      }
    const year = getCurrentDate().getFullYear();

    return { year }
}