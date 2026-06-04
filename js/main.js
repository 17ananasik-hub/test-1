document.addEventListener("DOMContentLoaded", () => {
    const config = {
        locale: "ru",
        dateFormat: "d.m.Y",
        altInput: true,
        altFormat: "d.m.Y",
        allowInput: false,
        disableMobile: true,
        monthSelectorType: "static",
        animate: true,
        position: "auto center",
        prevArrow: `
            <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6"/>
            </svg>
        `,
        nextArrow: `
            <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6"/>
            </svg>
        `
    };

    const fpTo = flatpickr("#date-to", {
        ...config,
        defaultDate: "09.08.2016",
        onChange(selectedDates) {
            fpFrom.set("maxDate", selectedDates[0]);
        }
    });

    const fpFrom = flatpickr("#date-from", {
        ...config,
        onChange(selectedDates) {
            fpTo.set("minDate", selectedDates[0]);
        }
    });

    document
        .querySelector("#trigger-from")
        ?.addEventListener("click", () => fpFrom.open());

    document
        .querySelector("#trigger-to")
        ?.addEventListener("click", () => fpTo.open());

    document
        .querySelector("#clear-from")
        ?.addEventListener("click", (e) => {
            e.stopPropagation();
            fpFrom.clear();
            fpTo.set("minDate", null);
        });

    document
        .querySelector("#clear-to")
        ?.addEventListener("click", (e) => {
            e.stopPropagation();
            fpTo.clear();
            fpFrom.set("maxDate", null);
        });
});

document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const countEl = btn.querySelector('.count');
        let count = Number(countEl.textContent);

        if (btn.classList.contains('active')) {
            count--;
            btn.classList.remove('active');
        } else {
            count++;
            btn.classList.add('active');
        }

        countEl.textContent = count;
    });
});

