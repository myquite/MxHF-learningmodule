// --- Application Configuration ---

const modules = [
    {
        id: "intro",
        title: "Introduction to Human Factors",
        objectives: [
            "Define Human Factors (HF) and Maintenance Human Factors (MxHF).",
            "Recognize the importance of HF in preventing errors and improving safety.",
            "Appreciate how HF relates to the entire aviation system."
        ],
        content: `
            <p class="mb-4">Human Factors (HF) is about understanding how people interact with systems, tasks, and environments. In aviation maintenance (MxHF), it focuses specifically on how human capabilities and limitations affect the safety and efficiency of maintenance operations.</p>
            <p class="mb-4">Think of it as designing work to fit the worker, rather than forcing the worker to adapt to poorly designed work. Understanding HF helps us identify why errors happen and how to prevent them, leading to safer skies and more reliable aircraft.</p>
            <p>It's not just about individual mistakes; it considers the whole system: procedures, tools, communication, teamwork, organizational culture, and the work environment itself.</p>
        `,
        activity: {
            type: "reflection",
            prompt: "Think about your typical workday. Can you recall a time when a task felt awkward, confusing, or unnecessarily difficult? How might Human Factors principles relate to that situation?",
            placeholder: "Briefly describe the situation and your thoughts..."
        },
        knowledgeCheck: null
    },
    {
        id: "stats_error",
        title: "Safety Statistics & Human Error",
        objectives: [
            "Understand human error's role in aviation incidents.",
            "Be aware of maintenance error statistics.",
            "Recognize different types of human errors (e.g., active failures)."
        ],
        content: `
            <p class="mb-4">Sadly, human error is a significant contributing factor in a large percentage of aviation accidents and incidents. Maintenance errors, specifically, can have severe consequences.</p>
            <p class="mb-4">Errors aren't always intentional violations. They often stem from predictable human limitations. Common types include:</p>
            <ul class="list-disc list-inside mb-4 space-y-1">
                <li><strong>Slips & Lapses:</strong> Errors in execution (e.g., accidentally skipping a step, forgetting something). Often occur during familiar tasks.</li>
                <li><strong>Mistakes:</strong> Errors in planning or intention (e.g., using the wrong procedure, misdiagnosing a problem). Often due to knowledge gaps or poor judgment.</li>
                <li><strong>Violations:</strong> Intentional deviations from procedures (though often not malicious, sometimes perceived as necessary to get the job done).</li>
            </ul>
            <p>Understanding these types helps us move beyond blame and focus on fixing the underlying system issues or HF contributing factors.</p>
        `,
        activity: {
            type: "quiz",
            questions: [
                {
                    question: "Forgetting to tighten a bolt during a routine task is most likely an example of a:",
                    options: ["Slip/Lapse", "Mistake", "Violation"],
                    correctAnswer: "Slip/Lapse"
                },
                {
                    question: "Using the wrong troubleshooting procedure because you misidentified the system fault is an example of a:",
                    options: ["Slip/Lapse", "Mistake", "Violation"],
                    correctAnswer: "Mistake"
                }
            ]
        },
        knowledgeCheck: null
    },
    {
        id: "dirty_dozen",
        title: "The 'Dirty Dozen'",
        objectives: [
            "Identify and understand the twelve most common maintenance-related causes of errors ('Dirty Dozen').",
            "Relate the Dirty Dozen to real-world maintenance scenarios."
        ],
        content: `
            <p class="mb-4">The "Dirty Dozen" are twelve common human factors preconditions that often lead to errors in maintenance. Recognizing them is a key step in preventing mistakes. They are:</p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm">
                <ul class="list-disc list-inside space-y-1">
                    <li>Lack of Communication</li>
                    <li>Complacency</li>
                    <li>Lack of Knowledge</li>
                    <li>Distraction</li>
                </ul>
                <ul class="list-disc list-inside space-y-1">
                    <li>Lack of Teamwork</li>
                    <li>Fatigue</li>
                    <li>Lack of Resources</li>
                    <li>Pressure</li>
                </ul>
                <ul class="list-disc list-inside space-y-1">
                    <li>Lack of Assertiveness</li>
                    <li>Stress</li>
                    <li>Lack of Awareness</li>
                    <li>Norms (Unwritten rules)</li>
                </ul>
            </div>
            <p>These factors rarely exist in isolation. Often, multiple factors combine to create a situation where an error is more likely.</p>
        `,
        activity: {
            type: "scenario_analysis",
            scenario: "An experienced technician is working late to finish a scheduled inspection. They feel pressured because the aircraft is needed for an early flight. A colleague asks a quick question, interrupting their workflow. Later, it's discovered a panel, although inspected, wasn't properly secured.",
            prompt: "Based on the scenario, which 'Dirty Dozen' factors might have contributed to this potential error? Select all that apply and briefly explain your reasoning.",
            options: [
                "Lack of Communication", "Complacency", "Lack of Knowledge", "Distraction",
                "Lack of Teamwork", "Fatigue", "Lack of Resources", "Pressure",
                "Lack of Assertiveness", "Stress", "Lack of Awareness", "Norms"
            ],
            explanationPlaceholder: "Explain why you selected these factors..."
        },
        knowledgeCheck: null
    },
    {
        id: "safety_culture",
        title: "Safety Culture & Org. Factors",
        objectives: [
            "Define safety culture and its impact.",
            "Recognize the influence of organizational factors.",
            "Understand management commitment and just culture."
        ],
        content: `
            <div class="accordion">
                <button class="accordion-button">
                    <span>What is Safety Culture?</span>
                    <span class="icon fas fa-chevron-down"></span>
                </button>
                <div class="accordion-content">
                    <p>Safety culture refers to the shared values, beliefs, and norms within an organization regarding safety. It's "the way we do things around here" when it comes to safety. A positive safety culture encourages open communication, learning from mistakes, and proactive risk management.</p>
                </div>
            </div>
            <div class="accordion mt-2">
                <button class="accordion-button">
                    <span>Organizational Factors</span>
                    <span class="icon fas fa-chevron-down"></span>
                </button>
                <div class="accordion-content">
                    <p>Decisions made at the organizational level (e.g., staffing, scheduling, resource allocation, procedures, training quality) significantly influence individual and team performance and the likelihood of errors.</p>
                </div>
            </div>
            <div class="accordion mt-2">
                <button class="accordion-button">
                    <span>Management Commitment & Just Culture</span>
                    <span class="icon fas fa-chevron-down"></span>
                </button>
                <div class="accordion-content">
                    <p>Visible commitment from management is crucial. A 'Just Culture' is vital – it encourages reporting errors and hazards without fear of unfair blame, distinguishing between honest mistakes, risky behavior, and reckless actions. This allows the organization to learn and improve.</p>
                </div>
            </div>
        `,
        activity: {
            type: "reflection",
            prompt: "Consider your workplace. How is management commitment to safety demonstrated? How effectively are the principles of a 'Just Culture' applied when errors or near-misses occur?",
            placeholder: "Your observations and thoughts..."
        },
        knowledgeCheck: null
    },
    {
        id: "action_plan",
        title: "Your Action Plan",
        objectives: [
            "Consolidate learning from previous modules.",
            "Identify specific actions to apply HF principles.",
            "Commit to personal safety improvements."
        ],
        content: `
            <p class="mb-4">Learning about Human Factors is the first step. The real value comes from applying these principles in your daily work.</p>
            <p>Based on what you've learned in the previous modules, it's time to create a personal action plan.</p>
        `,
        activity: {
            type: "action_planning",
            prompt: "Identify 1-3 specific, measurable actions you will take in the next week to apply MxHF principles. Examples: 'Actively use pre-task briefings to discuss potential risks', 'Speak up if I feel pressured or fatigued', 'Double-check procedures for unfamiliar tasks'.",
            placeholder: "1. \n2. \n3. "
        },
        knowledgeCheck: null
    },
    {
        id: "final_exam",
        title: "Final Assessment",
        objectives: [
            "Demonstrate understanding of key Human Factors concepts",
            "Apply HF principles to practical scenarios",
            "Complete the course with a perfect score"
        ],
        content: `
            <p class="mb-4">Congratulations on reaching the final assessment! This exam will test your understanding of the key concepts covered throughout the course.</p>
            <p class="mb-4">To successfully complete the course, you'll need to achieve a 100% score. Don't worry if you don't get it perfect the first time - you can review and retry as needed.</p>
        `,
        activity: {
            type: "quiz",
            questions: [
                {
                    question: "What is the primary goal of Human Factors in aviation maintenance?",
                    options: [
                        "To increase maintenance speed",
                        "To understand and optimize how people interact with systems and tasks for safety",
                        "To reduce maintenance costs",
                        "To simplify maintenance procedures"
                    ],
                    correctAnswer: "To understand and optimize how people interact with systems and tasks for safety"
                },
                {
                    question: "Which type of error occurs when someone accidentally skips a step in a familiar task?",
                    options: ["Violation", "Mistake", "Slip/Lapse", "Intentional Error"],
                    correctAnswer: "Slip/Lapse"
                },
                {
                    question: "Which of the following is NOT one of the 'Dirty Dozen'?",
                    options: ["Lack of Communication", "Physical Fitness", "Fatigue", "Pressure"],
                    correctAnswer: "Physical Fitness"
                },
                {
                    question: "What is a 'Just Culture' in aviation maintenance?",
                    options: [
                        "A culture where all errors are punished equally",
                        "A culture where no one is ever blamed for mistakes",
                        "A culture that balances accountability with learning from honest mistakes",
                        "A culture focused only on following rules"
                    ],
                    correctAnswer: "A culture that balances accountability with learning from honest mistakes"
                },
                {
                    question: "When should Human Factors principles be applied in maintenance operations?",
                    options: [
                        "Only during complex tasks",
                        "Only after an incident occurs",
                        "Only during training",
                        "Throughout all maintenance activities"
                    ],
                    correctAnswer: "Throughout all maintenance activities"
                }
            ]
        }
    }
];

// --- DOM Elements ---
let moduleNav;
let moduleDisplay;
let progressBar;
let resetProgressBtn;
let messageBox;
let messageText;
let prevButton;
let nextButton;

// --- State ---
let currentModuleId = null;
let moduleStatus = {}; // { moduleId: 'completed' | 'inprogress' }

// --- Activity Data Persistence (using Local Storage) ---
const activityStorageKey = 'mxhfActivityData';

function getActivityDataKey(module) {
    return `${module.id}_${module.activity.type}`;
}

function saveActivityData(module) {
    if (!module || !module.activity) return;
    const moduleId = module.id;
    let dataToSave = {};

    try {
        const existingData = JSON.parse(localStorage.getItem(activityStorageKey) || '{}');

        switch (module.activity.type) {
            case "reflection":
            case "action_planning":
                const textarea = document.getElementById(`activity_${moduleId}`);
                if (textarea) dataToSave = { text: textarea.value };
                break;
            case "quiz":
                const quizForm = document.getElementById(`quiz_${moduleId}`);
                if (quizForm) {
                    dataToSave.answers = {};
                    module.activity.questions.forEach((q, index) => {
                        const selected = quizForm.querySelector(`input[name="q${index}_${moduleId}"]:checked`);
                        if (selected) {
                            dataToSave.answers[`q${index}`] = selected.value;
                        }
                    });
                }
                break;
            case "scenario_analysis":
                const scenarioForm = document.getElementById(`scenario_${moduleId}`);
                if (scenarioForm) {
                    dataToSave.selectedFactors = [];
                    scenarioForm.querySelectorAll(`input[name="factor_${moduleId}"]:checked`).forEach(chk => {
                        dataToSave.selectedFactors.push(chk.value);
                    });
                    const explanationArea = document.getElementById(`explain_${moduleId}`);
                    if (explanationArea) dataToSave.explanation = explanationArea.value;
                }
                break;
        }

        if (Object.keys(dataToSave).length > 0) {
            existingData[getActivityDataKey(module)] = dataToSave;
            localStorage.setItem(activityStorageKey, JSON.stringify(existingData));
        }
    } catch (error) {
        console.error("Error saving activity data:", error);
    }
}

function loadActivityData(module) {
    if (!module || !module.activity) return;
    const moduleId = module.id;

    try {
        const allData = JSON.parse(localStorage.getItem(activityStorageKey) || '{}');
        const savedData = allData[getActivityDataKey(module)];

        if (!savedData) return; // No saved data for this activity

        switch (module.activity.type) {
            case "reflection":
            case "action_planning":
                const textarea = document.getElementById(`activity_${moduleId}`);
                if (textarea && savedData.text) textarea.value = savedData.text;
                break;
            case "quiz":
                const quizForm = document.getElementById(`quiz_${moduleId}`);
                if (quizForm && savedData.answers) {
                    Object.keys(savedData.answers).forEach(questionKey => {
                        const answerValue = savedData.answers[questionKey];
                        const input = quizForm.querySelector(`input[name="${questionKey}_${moduleId}"][value="${answerValue}"]`);
                        if (input) input.checked = true;
                    });
                }
                break;
            case "scenario_analysis":
                const scenarioForm = document.getElementById(`scenario_${moduleId}`);
                if (scenarioForm) {
                    if (savedData.selectedFactors) {
                        savedData.selectedFactors.forEach(factorValue => {
                            const checkbox = scenarioForm.querySelector(`input[name="factor_${moduleId}"][value="${factorValue}"]`);
                            if (checkbox) checkbox.checked = true;
                        });
                    }
                    const explanationArea = document.getElementById(`explain_${moduleId}`);
                    if (explanationArea && savedData.explanation) explanationArea.value = savedData.explanation;
                }
                break;
        }
    } catch (error) {
        console.error("Error loading activity data:", error);
    }
}

// --- Navigation Functions ---
function navigateToModule(direction) {
    if (!currentModuleId && direction === 'next') {
        // If we're on the welcome screen and going next
        loadModule(modules[0].id);
        return;
    }

    const currentIndex = modules.findIndex(m => m.id === currentModuleId);
    if (currentIndex === -1) return;

    let targetIndex;
    if (direction === 'next') {
        targetIndex = currentIndex + 1;
    } else if (direction === 'prev') {
        targetIndex = currentIndex - 1;
    }

    if (targetIndex >= 0 && targetIndex < modules.length) {
        loadModule(modules[targetIndex].id);
    }
}

// --- Functions ---

// Show/Hide Message Box
function showMessage(message, type = 'info', duration = 3000) {
    messageText.textContent = message;
    messageBox.className = `message-box ${type}`; // Base classes + type
    messageBox.style.display = 'block';
    setTimeout(closeMessageBox, duration);
}

function closeMessageBox() {
    messageBox.style.display = 'none';
}

// Load/Save Progress
function loadProgress() {
    const savedStatus = localStorage.getItem('mxhfModuleStatus');
    if (savedStatus) {
        moduleStatus = JSON.parse(savedStatus);
    } else {
        // Initialize status if nothing is saved
        moduleStatus = {};
        modules.forEach(m => moduleStatus[m.id] = 'not_started');
    }
    updateProgressUI();
}

function saveProgress() {
    localStorage.setItem('mxhfModuleStatus', JSON.stringify(moduleStatus));
    updateProgressUI();
}

function resetProgress() {
    if (confirm("Are you sure you want to reset all module progress?")) {
        moduleStatus = {};
        modules.forEach(m => moduleStatus[m.id] = 'not_started');
        currentModuleId = null;
        localStorage.removeItem('mxhfModuleStatus');
        // Also clear activity data if stored
        localStorage.removeItem('mxhfActivityData');
        renderNavigation();
        displayWelcomeMessage();
        updateProgressUI();
        showMessage("Progress reset.", "info");
    }
}

// Update Progress Bar and Sidebar Icons
function updateProgressUI() {
    const totalModules = modules.length;
    const completedModules = Object.values(moduleStatus).filter(s => s === 'completed').length;
    const progressPercent = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

    progressBar.style.width = `${progressPercent}%`;
    progressBar.textContent = `${progressPercent}%`;

    // Update sidebar icons
    document.querySelectorAll('.sidebar-link').forEach(link => {
        const moduleId = link.dataset.moduleId;
        const status = moduleStatus[moduleId] || 'not_started';
        const icon = link.querySelector('.status-icon');

        link.classList.remove('completed'); // Reset completion class

        if (status === 'completed') {
            icon.className = 'status-icon fas fa-check-circle'; // Checkmark icon
            link.classList.add('completed');
        } else if (status === 'inprogress' || link.classList.contains('active')) {
            icon.className = 'status-icon fas fa-circle-notch fa-spin'; // Spinner or similar for in progress/active
        } else {
            icon.className = 'status-icon far fa-circle'; // Empty circle
        }
    });
}

// Render Module Navigation Sidebar
function renderNavigation() {
    moduleNav.innerHTML = ''; // Clear existing links
    modules.forEach(module => {
        const link = document.createElement('a');
        link.href = '#';
        link.classList.add('sidebar-link');
        link.dataset.moduleId = module.id;

        const statusIcon = document.createElement('i');
        statusIcon.className = 'status-icon far fa-circle'; // Default icon
        link.appendChild(statusIcon);

        const titleSpan = document.createElement('span');
        titleSpan.textContent = module.title;
        link.appendChild(titleSpan);

        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadModule(module.id);
        });
        moduleNav.appendChild(link);
    });
    updateProgressUI(); // Ensure icons are correct on initial render
}

// Display Welcome Message
function displayWelcomeMessage() {
    moduleDisplay.innerHTML = `
        <h1 class="welcome-title">Welcome!</h1>
        <p class="welcome-text">Select a module from the sidebar to begin your learning journey on Maintenance Human Factors.</p>
        <p class="welcome-text">This application uses interactive elements and scenarios to help you actively engage with the material and apply it to your work.</p>
    `;

    // Reset current module and update navigation
    currentModuleId = null;
    updateNavigationButtons();

    // Deactivate all sidebar links visually
    document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
}

// Update the navigation buttons state
function updateNavigationButtons() {
    if (!currentModuleId) {
        // On welcome screen
        prevButton.disabled = true;
        nextButton.disabled = false;
        return;
    }

    const currentIndex = modules.findIndex(m => m.id === currentModuleId);
    
    // Update Previous button
    prevButton.disabled = currentIndex === 0;
    
    // Update Next button
    nextButton.disabled = currentIndex === modules.length - 1;
}

// Update the loadModule function
function loadModule(moduleId) {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return;

    currentModuleId = moduleId;
    if (!moduleStatus[moduleId] || moduleStatus[moduleId] === 'not_started') {
        moduleStatus[moduleId] = 'inprogress';
        saveProgress();
    }

    // Update active link in sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.moduleId === moduleId) {
            link.classList.add('active');
        }
    });
    updateProgressUI();
    updateNavigationButtons();

    // Build Module HTML
    let moduleHtml = `<h1 class="module-title">${module.title}</h1>`;

    // Display Objectives
    if (module.objectives && module.objectives.length > 0) {
        moduleHtml += `<div class="objectives-container">
                        <h3 class="objectives-title">Learning Objectives:</h3>
                        <ul class="objectives-list">`;
        module.objectives.forEach(obj => {
            moduleHtml += `<li>${obj}</li>`;
        });
        moduleHtml += `</ul></div>`;
    }

    // Display Core Content
    moduleHtml += `<div class="module-content-text">${module.content}</div>`; // Using prose for basic text styling

    // --- Render Activity ---
    if (module.activity) {
        moduleHtml += `<div class="activity-section">
                        <h3 class="activity-title">Activity: Engage & Apply</h3>`;
        switch (module.activity.type) {
            case "reflection":
                moduleHtml += `<div class="interactive-prompt">
                                <label for="activity_${moduleId}">${module.activity.prompt}</label>
                                <textarea id="activity_${moduleId}" rows="4" placeholder="${module.activity.placeholder || 'Your thoughts...'}"></textarea>
                               </div>`;
                break;
            case "quiz":
                moduleHtml += `<div class="interactive-prompt">
                                <form id="quiz_${moduleId}">`;
                module.activity.questions.forEach((q, index) => {
                    moduleHtml += `<div class="quiz-question">
                                     <p class="question-text">${index + 1}. ${q.question}</p>`;
                    q.options.forEach((opt, i) => {
                        const optionId = `q${index}_opt${i}_${moduleId}`;
                        moduleHtml += `<div class="quiz-option">
                                        <input type="radio" id="${optionId}" name="q${index}_${moduleId}" value="${opt}">
                                        <label for="${optionId}">${opt}</label>
                                    </div>`;
                    });
                    moduleHtml += `</div>`;
                });
                moduleHtml += `</form>
                                <div id="quiz_feedback_${moduleId}" class="feedback-container"></div>
                             </div>`;
                break;
            case "scenario_analysis":
                moduleHtml += `<div class="scenario-box">
                                 <h4 class="scenario-title">Scenario:</h4>
                                 <p class="scenario-text">${module.activity.scenario}</p>
                                </div>
                                <div class="interactive-prompt">
                                 <form id="scenario_${moduleId}">
                                 <label class="prompt-label">${module.activity.prompt}</label>
                                 <div class="options-grid">`;
                module.activity.options.forEach((opt, i) => {
                    const checkboxId = `chk${i}_${moduleId}`;
                    moduleHtml += `<div class="option-item">
                                    <input type="checkbox" id="${checkboxId}" name="factor_${moduleId}" value="${opt}">
                                    <label for="${checkboxId}">${opt}</label>
                                </div>`;
                });
                moduleHtml += `</div>
                                <label for="explain_${moduleId}" class="explanation-label">Explanation:</label>
                                <textarea id="explain_${moduleId}" class="explanation-input" rows="3" placeholder="${module.activity.explanationPlaceholder || 'Explain your reasoning...'}"></textarea>
                                </form>
                                <div id="scenario_feedback_${moduleId}" class="feedback-container"></div>
                             </div>`;
                break;
            case "action_planning":
                moduleHtml += `<div class="interactive-prompt">
                                <label for="activity_${moduleId}" class="prompt-label">${module.activity.prompt}</label>
                                <textarea id="activity_${moduleId}" rows="5" placeholder="${module.activity.placeholder || 'List your actions here...'}"></textarea>
                               </div>`;
                break;
        }
        moduleHtml += `</div>`; // End activity-section
    }

    // Update the complete button container
    moduleHtml += `<div class="complete-button-container">
                    <button id="complete-btn_${moduleId}" class="complete-button ${moduleStatus[moduleId] === 'completed' ? 'completed' : ''}" ${moduleStatus[moduleId] === 'completed' ? 'disabled' : ''}>
                        ${moduleStatus[moduleId] === 'completed' ? '<i class="fas fa-check"></i> Completed' : 'Mark as Complete <i class="fas fa-check"></i>'}
                    </button>
                   </div>`;

    moduleDisplay.innerHTML = moduleHtml;
    moduleDisplay.scrollTop = 0;

    // Add event listeners
    addAccordionListeners();
    addActivityListeners(module);
    addCompleteButtonListener(moduleId);

    // Load saved activity data
    loadActivityData(module);
}

// Add accordion functionality
function addAccordionListeners() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.onclick = () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.icon');
            
            // Toggle active class on button and content
            button.classList.toggle('active');
            content.classList.toggle('active');
            
            // Update icon rotation
            if (button.classList.contains('active')) {
                icon.classList.add('active');
            } else {
                icon.classList.remove('active');
            }
        };
    });
}

// Add activity-specific listeners
function addActivityListeners(module) {
    if (!module.activity) return;
    const moduleId = module.id;

    switch (module.activity.type) {
        case "reflection":
        case "action_planning":
            const textarea = document.getElementById(`activity_${moduleId}`);
            if (textarea) {
                textarea.addEventListener('input', () => saveActivityData(module));
            }
            break;
        case "quiz":
            const quizForm = document.getElementById(`quiz_${moduleId}`);
            if (quizForm) {
                quizForm.addEventListener('change', () => saveActivityData(module));
            }
            break;
        case "scenario_analysis":
            const scenarioForm = document.getElementById(`scenario_${moduleId}`);
            if (scenarioForm) {
                // Add listeners for checkboxes
                scenarioForm.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    checkbox.addEventListener('change', () => saveActivityData(module));
                });
                
                // Add listener for explanation textarea
                const explanationArea = document.getElementById(`explain_${moduleId}`);
                if (explanationArea) {
                    explanationArea.addEventListener('input', () => saveActivityData(module));
                }
            }
            break;
    }
}

// Update the addCompleteButtonListener function to be more robust
function addCompleteButtonListener(moduleId) {
    const completeBtn = document.getElementById(`complete-btn_${moduleId}`);
    if (!completeBtn) {
        console.error(`Complete button not found for module ${moduleId}`);
        return;
    }
    
    completeBtn.onclick = () => {
        if (moduleStatus[moduleId] !== 'completed') {
            // Update status and save
            moduleStatus[moduleId] = 'completed';
            saveProgress();
            
            // Update button appearance
            completeBtn.innerHTML = '<i class="fas fa-check"></i> Completed';
            completeBtn.disabled = true;
            completeBtn.classList.add('completed');
            
            // Show completion message
            showMessage(`${modules.find(m=>m.id===moduleId).title} completed!`, 'success');
            
            // Show activity feedback if applicable
            const module = modules.find(m => m.id === moduleId);
            if (module) {
                provideActivityFeedback(module);
            }
            
            // Auto-advance to next module after a short delay
            setTimeout(() => {
                const currentIndex = modules.findIndex(m => m.id === moduleId);
                if (currentIndex < modules.length - 1) {
                    loadModule(modules[currentIndex + 1].id);
                }
            }, 1500);
        }
    };
}

// Add course completion popup function
function showCourseCompletionPopup() {
    const popup = document.createElement('div');
    popup.className = 'completion-popup';
    popup.innerHTML = `
        <div class="completion-content">
            <h2><i class="fas fa-graduation-cap"></i> Congratulations!</h2>
            <p>You have successfully completed the Maintenance Human Factors course with a perfect score!</p>
            <p>You've demonstrated a thorough understanding of:</p>
            <ul>
                <li>Human Factors principles in aviation maintenance</li>
                <li>Error prevention and safety improvement</li>
                <li>The importance of organizational culture</li>
                <li>Practical application of HF concepts</li>
            </ul>
            <button class="close-popup-btn">Close</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Add close button functionality
    popup.querySelector('.close-popup-btn').onclick = () => {
        popup.remove();
    };
}

// Update the provideActivityFeedback function to handle exam completion
function provideActivityFeedback(module) {
    if (!module || !module.activity) return;
    const moduleId = module.id;

    switch(module.activity.type) {
        case 'quiz':
            const quizForm = document.getElementById(`quiz_${moduleId}`);
            const feedbackDiv = document.getElementById(`quiz_feedback_${moduleId}`);
            if (!quizForm || !feedbackDiv) return;

            let correctCount = 0;
            let feedbackHtml = '<h4 class="feedback-title">Quiz Review:</h4>';
            
            module.activity.questions.forEach((q, index) => {
                const selected = quizForm.querySelector(`input[name="q${index}_${moduleId}"]:checked`);
                const userAnswer = selected ? selected.value : "Not answered";
                const isCorrect = userAnswer === q.correctAnswer;
                if (isCorrect) correctCount++;

                feedbackHtml += `<div class="feedback-item ${isCorrect ? 'correct' : 'incorrect'}">
                                    <p class="question-text">${index + 1}. ${q.question}</p>
                                    <p class="answer-text">Your answer: ${userAnswer} ${isCorrect ? '<span class="correct-mark">(Correct)</span>' : `<span class="incorrect-mark">(Incorrect)</span>`}</p>
                                    ${!isCorrect ? `<p class="correct-answer">Correct answer: ${q.correctAnswer}</p>` : ''}
                                </div>`;
            });

            const totalQuestions = module.activity.questions.length;
            const score = Math.round((correctCount / totalQuestions) * 100);
            
            feedbackHtml += `<p class="score-text">Score: ${score}% (${correctCount}/${totalQuestions})</p>`;
            
            // Show completion popup if it's the final exam and score is 100%
            if (moduleId === 'final_exam' && score === 100) {
                showCourseCompletionPopup();
            } else if (moduleId === 'final_exam') {
                feedbackHtml += `<p class="retry-message">Review the feedback above and try again to achieve 100%.</p>`;
            }
            
            feedbackDiv.innerHTML = feedbackHtml;
            break;
            
        case 'scenario_analysis':
            const scenarioFeedbackDiv = document.getElementById(`scenario_feedback_${moduleId}`);
            if (scenarioFeedbackDiv) {
                scenarioFeedbackDiv.innerHTML = `<p class="feedback-message">Thank you for analyzing the scenario. Reflecting on these factors helps build awareness.</p>`;
            }
            break;
    }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements
    moduleNav = document.getElementById('module-navigation');
    moduleDisplay = document.getElementById('module-display');
    progressBar = document.getElementById('progress-bar');
    resetProgressBtn = document.getElementById('reset-progress-btn');
    messageBox = document.getElementById('message-box');
    messageText = document.getElementById('message-text');
    prevButton = document.getElementById('prev-btn');
    nextButton = document.getElementById('next-btn');

    // Set up navigation button event listeners
    prevButton.addEventListener('click', () => navigateToModule('prev'));
    nextButton.addEventListener('click', () => navigateToModule('next'));

    loadProgress();
    renderNavigation();
    displayWelcomeMessage();
    resetProgressBtn.addEventListener('click', resetProgress);
});