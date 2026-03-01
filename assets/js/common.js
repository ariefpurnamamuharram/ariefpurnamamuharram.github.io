// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        visibleOnly: true,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        }
    })
    $('[data-toggle="tooltip"]').tooltip()

    // Export Citation modal: open modal with BibTeX and/or RIS when Export Citation button is clicked
    $(document).on('click', '.export-citation-modal-btn', function () {
        var btn = $(this)
        var bibtexTargetId = btn.data('export-citation-bibtex-target')
        var risTargetId = btn.data('export-citation-ris-target')
        var bibtexSource = bibtexTargetId ? document.getElementById(bibtexTargetId) : null
        var risSource = risTargetId ? document.getElementById(risTargetId) : null
        var bibtexContent = document.getElementById('exportCitationModalContent')
        var risContent = document.getElementById('exportCitationModalRisContent')
        var bibtexTabLi = $('#exportCitationBibtexTabLi')
        var risTabLi = $('#exportCitationRisTabLi')
        var bibtexPane = $('#exportCitationBibtexPane')
        var risPane = $('#exportCitationRisPane')

        if (bibtexSource && bibtexContent) {
            bibtexContent.textContent = bibtexSource.textContent
            bibtexTabLi.show()
        } else {
            bibtexTabLi.hide()
        }
        if (risSource && risContent) {
            risContent.textContent = risSource.textContent
            risTabLi.show()
        } else {
            risTabLi.hide()
        }

        // Activate first available tab (BibTeX preferred when both exist)
        bibtexPane.removeClass('show active')
        risPane.removeClass('show active')
        bibtexTabLi.find('.nav-link').removeClass('active').attr('aria-selected', 'false')
        risTabLi.find('.nav-link').removeClass('active').attr('aria-selected', 'false')
        if (bibtexSource && bibtexContent) {
            bibtexPane.addClass('show active')
            bibtexTabLi.find('.nav-link').addClass('active').attr('aria-selected', 'true')
        } else if (risSource && risContent) {
            risPane.addClass('show active')
            risTabLi.find('.nav-link').addClass('active').attr('aria-selected', 'true')
        }

        $('#exportCitationModal').modal('show')
    })

    // Export Citation: copy to clipboard
    $(document).on('click', '.export-citation-copy-btn', function () {
        var btn = $(this)
        var targetId = btn.data('export-citation-target')
        var el = document.getElementById(targetId)
        if (!el) return
        var text = el.textContent
        var showCopied = function () {
            var origTitle = btn.attr('title')
            btn.attr('title', 'Copied!').tooltip('dispose').tooltip('show')
            setTimeout(function () { btn.attr('title', origTitle) }, 1500)
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(showCopied)
        } else {
            var ta = document.createElement('textarea')
            ta.value = text
            ta.setAttribute('readonly', '')
            ta.style.position = 'absolute'
            ta.style.left = '-9999px'
            document.body.appendChild(ta)
            ta.select()
            try {
                document.execCommand('copy')
                showCopied()
            } catch (err) {}
            document.body.removeChild(ta)
        }
    })
})
