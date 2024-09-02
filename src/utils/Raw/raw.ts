// filter_sort.js
const filter_sort = () => {
  console.log("yes");
  const addFilter = document.getElementById("add_filter");
  const cross = document.getElementById("cross");
  const overlay = document.getElementById("filterOverlay");

  if (addFilter && cross && overlay) {
    addFilter.addEventListener("click", () => {
      const filterSide = document.getElementById("filterSide");
      if (filterSide) {
        cross.classList.remove("hidden");
        cross.classList.add("block", "flex");
        overlay.classList.remove("hidden");
        overlay.classList.add("block");
        filterSide.classList.remove("hidden");

        setTimeout(() => {
          cross.classList.add("opacity-100");
          overlay.classList.add("opacity-100");
          filterSide.classList.add(
            "opacity-100",
            "bottom-[2%]",
            "block",
            "h-auto"
          );
        }, 10);
      }
    });
  }
};

const close = () => {
  const cross = document.getElementById("cross");
  const overlay = document.getElementById("filterOverlay");

  if (cross && overlay) {
    cross.addEventListener("click", () => {
      const filterSide = document.getElementById("filterSide");
      if (filterSide) {
        cross.classList.remove("opacity-100");
        overlay.classList.remove("opacity-100");
        filterSide.classList.remove("opacity-100", "h-auto");

        // Hide elements after transition
        setTimeout(() => {
          cross.classList.remove("block");
          cross.classList.add("hidden");
          overlay.classList.remove("block");
          overlay.classList.add("hidden");
          filterSide.classList.add("hidden");
        }, 100);
      }
    });
  }
};

const FilterSmall = { filter_sort, close };
export default FilterSmall;
