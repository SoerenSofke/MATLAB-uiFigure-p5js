fig = uifigure();
fig.Position(3:4) = [400 400];
fig.Resize = 'off';

h = uihtml(fig);
h.Position = [0 0 400 400];

h.HTMLSource = fullfile(pwd, 'index.html');
h.DataChangedFcn = @(src,event)handleReceivedData(h.Data);

while ishandle(fig)
    h.Data = toc();
    tic();
    drawnow();
end

function handleReceivedData(dataRx)
disp(dataRx)
end
