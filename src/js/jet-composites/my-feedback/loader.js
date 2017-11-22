define(['ojs/ojcore', 'text!./my-feedback.html', './my-feedback', 'text!./my-feedback.json', 'css!./my-feedback.css', 'ojs/ojcomposite'], function (oj, view, viewModel, metadata) {
    oj.Composite.register('my-feedback', {
        view: { inline: view },
        viewModel: { inline: viewModel },
        metadata: { inline: JSON.parse(metadata) }
    });
}
);