// Proceedings page specific functionality

// Category filtering for papers
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const paperItems = document.querySelectorAll('.paper-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter papers
            paperItems.forEach(paper => {
                if (category === 'all' || paper.getAttribute('data-category') === category) {
                    paper.style.display = 'block';
                    paper.style.opacity = '0';
                    paper.style.transform = 'translateY(20px)';
                    
                    // Animate in
                    setTimeout(() => {
                        paper.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        paper.style.opacity = '1';
                        paper.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    paper.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    paper.style.opacity = '0';
                    paper.style.transform = 'translateY(-20px)';
                    
                    setTimeout(() => {
                        paper.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Search functionality for papers
function initializePaperSearch() {
    const searchInput = document.getElementById('paper-search');
    if (!searchInput) return;

    const paperItems = document.querySelectorAll('.paper-item');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        paperItems.forEach(paper => {
            const title = paper.querySelector('h4').textContent.toLowerCase();
            const authors = paper.querySelector('.paper-authors p').textContent.toLowerCase();
            const abstract = paper.querySelector('.paper-abstract p').textContent.toLowerCase();
            
            if (title.includes(query) || authors.includes(query) || abstract.includes(query)) {
                paper.style.display = 'block';
                paper.style.opacity = '1';
                paper.style.transform = 'translateY(0)';
            } else {
                paper.style.display = 'none';
            }
        });
    });
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePaperSearch);

// Paper download tracking
function trackPaperDownload(paperTitle, downloadType) {
    // This would typically send data to an analytics service
    console.log(`Download tracked: ${paperTitle} - ${downloadType}`);
    
    // You could integrate with Google Analytics or other tracking services here
    // gtag('event', 'download', {
    //     'paper_title': paperTitle,
    //     'download_type': downloadType
    // });
}

// Add download tracking to paper links
document.addEventListener('DOMContentLoaded', function() {
    const paperLinks = document.querySelectorAll('.paper-link');
    
    paperLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const paperItem = this.closest('.paper-item');
            const paperTitle = paperItem.querySelector('h4').textContent;
            const downloadType = this.textContent.trim();
            
            trackPaperDownload(paperTitle, downloadType);
        });
    });
});

// Export functionality for proceedings
function exportProceedings(format) {
    const papers = Array.from(document.querySelectorAll('.paper-item')).map(paper => {
        return {
            title: paper.querySelector('h4').textContent,
            authors: paper.querySelector('.paper-authors p').textContent,
            abstract: paper.querySelector('.paper-abstract p').textContent,
            type: paper.querySelector('.paper-type').textContent,
            category: paper.getAttribute('data-category')
        };
    });
    
    if (format === 'json') {
        const dataStr = JSON.stringify(papers, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        downloadBlob(dataBlob, 'proceedings.json');
    } else if (format === 'csv') {
        const csvContent = convertToCSV(papers);
        const dataBlob = new Blob([csvContent], {type: 'text/csv'});
        downloadBlob(dataBlob, 'proceedings.csv');
    }
}

function convertToCSV(papers) {
    const headers = ['Title', 'Authors', 'Abstract', 'Type', 'Category'];
    const rows = papers.map(paper => [
        `"${paper.title}"`,
        `"${paper.authors}"`,
        `"${paper.abstract}"`,
        `"${paper.type}"`,
        `"${paper.category}"`
    ]);
    
    return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Add export buttons if needed
function addExportButtons() {
    const downloadAllSection = document.querySelector('.download-all');
    if (downloadAllSection && !document.querySelector('.export-buttons')) {
        const exportButtons = document.createElement('div');
        exportButtons.className = 'export-buttons';
        exportButtons.innerHTML = `
            <div style="margin-top: 1rem;">
                <button onclick="exportProceedings('json')" class="export-btn">Export as JSON</button>
                <button onclick="exportProceedings('csv')" class="export-btn">Export as CSV</button>
            </div>
        `;
        downloadAllSection.appendChild(exportButtons);
    }
}

// Initialize export functionality
document.addEventListener('DOMContentLoaded', addExportButtons);

// Add CSS for export buttons
const exportButtonCSS = `
.export-buttons {
    margin-top: 1rem;
}

.export-btn {
    background: #27ae60;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 0.5rem;
    font-size: 0.9rem;
    transition: background 0.3s ease;
}

.export-btn:hover {
    background: #229954;
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = exportButtonCSS;
document.head.appendChild(style);
