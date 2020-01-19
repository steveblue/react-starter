import path from 'path';

const errorHandler = (err, _req, res, _next) =>
    res.status(404).json({
        status: 'error',
        message: err.message,
        stack:
            process.env.NODE_ENV === 'development' &&
            (err.stack || '')
                .split('\n')
                .map((line) => line.trim())
                .map((line) => line.split(path.sep).join('/'))
                .map((line) =>
                    line.replace(
                        process
                            .cwd()
                            .split(path.sep)
                            .join('/'),
                        '.'
                    )
                ),
    });

export default errorHandler;
