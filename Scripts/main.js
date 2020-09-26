exports.activate = function() {
    nova.assistants.registerIssueAssistant("python", new Flake8IssueAssistant());
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}

class Flake8IssueAssistant {
    provideIssues(editor) {
        let parser = new IssueParser("flake8")
        const line = 2;
        parser.pushLine(`Support/test.py:${line}:2: F401 'math' imported but unused`);
        parser.issues[0].line == 2;  // false
        return parser.issues;
    }
}
